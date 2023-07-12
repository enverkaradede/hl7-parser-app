import logo from "./logo.svg";
import "./App.css";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";

// bind electron main.js and react App.js for ICP using "remote"
//! these code blocks are for the older version of Electron
// // const electron = window.require("electron");
// // const remote = electron.remote;
// // const { BrowserWindow, dialog, Menu } = remote;

// new "remote" usage after Electron version 5.0.0
const remote = window.require("@electron/remote");
const { BrowserWindow, dialog, Menu } = remote;

const { shell } = window.require("electron");

const App = () => {
  return (
    <div className="App">
      <PageHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            const win = new BrowserWindow({
              modal: true,
              width: 500,
              height: 300,
              show: false,
            });
            win.loadURL("https://google.com");
            win.once("ready-to-show", () => {
              win.show();
            });
          }}
        >
          Click to open Google
        </button>
        <button
          onClick={() => {
            dialog.showErrorBox("Error Dialog!", "Something went wrong.");
          }}
        >
          Show Error Dialog
        </button>
        <button
          onClick={() => {
            dialog
              .showOpenDialog({
                title: "File Selector",
                message: "Please select one or more files",
                filters: [
                  { name: "Images", extensions: ["jpg", "png", "gif"] },
                  { name: "Movies", extensions: ["mkv", "avi", "mp4"] },
                  { name: "Custom File Type", extensions: ["as"] },
                  { name: "All Files", extensions: ["*"] },
                ],
                properties: ["openFile"],
              })
              .then((result) => {
                shell.openPath(result.filePaths[0]);
                console.log(result.filePaths[0]);
              });
          }}
        >
          Select file(s)
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PageFooter />
    </div>
  );
};

export default App;
