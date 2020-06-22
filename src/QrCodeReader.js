import React, { useEffect, createRef } from 'react';
import jsQR from 'jsqr';

function useMount(fn) {
  useEffect(() => {
    fn();
  }, [fn])
}

export const QRCodeReader = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const videoRef = createRef();
  const canvasRef = createRef();

  const handleAnimationFrame = () => requestAnimationFrame(scan);

  useMount(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { height, width } // facingMode: { exact: "environment" }
      });

      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();

      handleAnimationFrame();
    } catch(err) {
      console.log(err);
    }
  });

  const scan = () => {
    const canvasContext = canvasRef.current.getContext('2d');

    if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      canvasContext.drawImage(videoRef.current, 0, 0, width, height);

      const imageData = canvasContext.getImageData(0, 0, width, height);

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        handlelQrCode(code);
      } else {
        handleAnimationFrame();
      }
    } else {
      handleAnimationFrame();
    }
  }

  const handlelQrCode = (code) => {
    console.log(code);
  }

  return (
    <div>
      <video ref={videoRef} />
      <canvas hidden={true} ref={canvasRef} />
    </div>
  )
}
