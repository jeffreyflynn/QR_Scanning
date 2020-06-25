import React, { useEffect, createRef, Fragment, useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/library';

export const QRCodeReader = () => {
  const videoRef = createRef();

  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const hasUserMedia = Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

        if (hasUserMedia && videoRef.current) {

          const codeReader = new BrowserQRCodeReader();

          const result = await codeReader.decodeFromInputVideoDevice(undefined, videoRef.current);

          const qrData = result.text;

          if (qrData !== qrCode) {
            setQrCode(qrData);
          }
        }
      } catch(err) {
        console.log(err);
      }
    })()
  }, [videoRef, setQrCode, qrCode]);

  return (
    <Fragment>
      <video ref={videoRef} />
      {qrCode !== null && <div className="qr-code">{qrCode}</div>}
    </Fragment>
  )
}
