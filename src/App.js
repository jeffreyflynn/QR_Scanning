import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { QRCodeReader } from './QrCodeReader';

// HOST=192.168.86.47

function App() {

  const [isQRReaderVisible, setQRVisibiity] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="App-link" onClick={() => setQRVisibiity(true)}>
          Scan QR Code
        </button>
        {/* {isQRReaderVisible && <QRCodeReader />} */}
        <QRCodeReader />
      </header>
    </div>
  );
}

export default App;
