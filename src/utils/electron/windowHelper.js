// bind electron main.js and react App.js for ICP using "remote"
//! these code blocks are for the older version of Electron
// // const electron = window.require("electron");
// // const remote = electron.remote;
// // const { BrowserWindow, dialog, Menu } = remote;

// new "remote" usage after Electron version 5.0.0
const remote = window.require("@electron/remote");
const { BrowserWindow } = remote;

// simple popup creator. creates a popup window and opens given url in it.
// opens only after the given url is loaded in order to blocking the empty window.
const openPopup = (url) => {
  const win = new BrowserWindow({
    modal: true,
    width: 800,
    height: 600,
    show: false,
  });
  win.loadURL(url);
  win.once("ready-to-show", () => {
    win.show();
  });
};

export { openPopup };
