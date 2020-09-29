import React from 'react';
import logo from "./Quan.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"
          alt="logo:sorry that's the only pic of myself I have at the moment after building my first PC" />
        <p>
          My name is <code>Quan</code> and I'm going to master <code>React</code> !!!
        </p>
        <a
          className="App-link"
          href="https://github.com/quanvg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
