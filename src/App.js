import React, { useState } from 'react';
import { QRCodeReader } from './QrCodeReader';

function App() {
  const [qrCode, setQrCode] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <QRCodeReader qrCode={qrCode} setQrCode={setQrCode} />
        <div>{qrCode}</div>
      </header>
    </div>
  );
}

export default App;
