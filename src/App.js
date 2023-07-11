import logo from "./logo.svg";
import "./App.css";

// bind electron main.js and react App.js for ICP using "remote"
//! these code blocks are for the older version of Electron
//* const electron = window.require("electron");
//* const remote = electron.remote;
//* const { BrowserWindow, dialog, Menu } = remote;

// new "remote" usage after Electron version 5.0.0
const remote = window.require("@electron/remote");
const { BrowserWindow, dialog, Menu } = remote;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
