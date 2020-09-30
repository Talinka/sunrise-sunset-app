import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Main from './components/Main';

function App() {
  return (
    <>
      <header>
        <h2>Sunrise and sunset information</h2>
      </header>
      <main role="main" className="main-content">
        <Main/>
      </main>
    </>
  );
}

export default App;
