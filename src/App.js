import React, { useState } from 'react';
import { QRCodeReader } from './QrCodeReader';

function App() {
  const [qrCode, setQrCode] = useState(null);

  const handlelQrCode = ({data}) => {
    if (data !== qrCode) {
      setQrCode(data);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <QRCodeReader handlelQrCode={handlelQrCode} />
        <div>{qrCode}</div>
      </header>
    </div>
  );
}

export default App;
