import React, { useEffect, createRef, Fragment, useCallback, useState } from 'react';
import { BrowserQRCodeReader } from '@zxing/library';

export const QRCodeReader = () => {
  const videoRef = createRef();

  const [qrCode, setQrCode] = useState(null);

  const handlelQrCode = useCallback((data) => {
    if (data !== qrCode) {
      setQrCode(data);
    }
  }, [qrCode])

  useEffect(() => {
    (async () => {
      try {
        const hasUserMedia = Boolean(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

        if (hasUserMedia && videoRef.current) {

          const codeReader = new BrowserQRCodeReader();

          const result = await codeReader.decodeFromInputVideoDevice(undefined, videoRef.current);

          handlelQrCode(result.text);
        }
      } catch(err) {
        console.log(err);
      }
    })()
  }, [videoRef, handlelQrCode]);

  return (
    <Fragment>
      <video ref={videoRef} />
      {qrCode !== null && <div className="qr-code">{qrCode}</div>}
    </Fragment>
  )
}
