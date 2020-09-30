import React from 'react';
// import logo from "./Quan.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">       
        {/* {<img src={logo} className="App-logo"} alt="logo" /> */}
        <div className="container">
          <p>
            My name is <code>Quan</code>,{"\n"}
            <a href="https://github.com/quanvg">and I'm going to master <code>React</code> !!!</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;