import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <>
      <header>
        <h2>Sunrise and sunset application</h2>
      </header>
      <main role="main" className="main-content">
        <Main/>
      </main>
    </>
  );
}

export default App;
