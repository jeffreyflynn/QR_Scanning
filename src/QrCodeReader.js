import React, { useEffect, createRef, Fragment } from 'react';
import jsQR from 'jsqr';

const useMount = (fn) => {
  useEffect(() => fn(), [fn])
}

export const QRCodeReader = ({handlelQrCode}) => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const videoRef = createRef();
  const canvasRef = createRef();

  const handleAnimationFrame = () => requestAnimationFrame(scan);

  useMount(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { height, width, facingMode: "environment" }
      });

      videoRef.current.srcObject = mediaStream;
      videoRef.current.setAttribute("playsinline", true);
      videoRef.current.play();

      handleAnimationFrame();
    } catch(err) {
      console.log(err);
    }
  });

  const scan = () => {
    if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const canvasContext = canvasRef.current.getContext('2d');

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      canvasContext.drawImage(videoRef.current, 0, 0, width, height);

      const imageData = canvasContext.getImageData(0, 0, width, height);

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code) {
        handlelQrCode(code);
      }
    }
    handleAnimationFrame();
  }

  return (
    <Fragment>
      <video ref={videoRef} />
      <canvas hidden={true} ref={canvasRef} />
    </Fragment>
  )
}
