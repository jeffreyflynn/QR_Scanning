import React, { useEffect, createRef, Fragment, useCallback, useState } from 'react';
import jsQR from 'jsqr';

export const QRCodeReader = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const videoRef = createRef();
  const canvasRef = createRef();

  const [qrCode, setQrCode] = useState(null);

  const handlelQrCode = useCallback(({data}) => {
    if (data !== qrCode) {
      setQrCode(data);
    }
  }, [qrCode])

  const scan = useCallback(() => {
    if (videoRef.current && videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      const canvasContext = canvasRef.current.getContext('2d');

      canvasRef.current.width = width;
      canvasRef.current.height = height;

      canvasContext.drawImage(videoRef.current, 0, 0, width, height);

      const imageData = canvasContext.getImageData(0, 0, width, height);

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });

      if (code && code.data.length > 0) {
        handlelQrCode(code);
      }
    }
    requestAnimationFrame(scan)
  }, [canvasRef, videoRef, height, width, handlelQrCode])

  useEffect(() => {
    // On mount - get the media stream, set it to the video element, and init animation frames.
    (async () => {
      try {
        const hasUserMedia = Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

        if (hasUserMedia) {
          // `getUserMedia` can only be used from a HTTPS URL, localhost, of a file:// URL.
          const mediaStream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { height, width, facingMode: "environment", aspectRatio: width / height }
          });

          videoRef.current.srcObject = mediaStream;

          requestAnimationFrame(scan)
        }
      } catch(err) {
        console.log(err);
      }
    })()
  }, [videoRef, height, width, scan]);

  return (
    <Fragment>
      <canvas hidden={true} ref={canvasRef} />
      <video ref={videoRef} playsInline={true} autoPlay={true} />
      {qrCode !== null && <div className="qr-code">{qrCode}</div>}
    </Fragment>
  )
}
