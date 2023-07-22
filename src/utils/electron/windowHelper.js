// bind electron main.js and react App.js for ICP using "remote"
//! these code blocks are for the older version of Electron
// // const electron = window.require("electron");
// // const remote = electron.remote;
// // const { BrowserWindow, dialog, Menu } = remote;

import { combineContentHtml } from "../pure/combineContentHtml";

// new "remote" usage after Electron version 5.0.0
const remote = window.require("@electron/remote");
const { BrowserWindow } = remote;

// simple popup creator. creates a popup window and opens given url in it.
// opens only after the given url is loaded in order to blocking the empty window.
const openUrlPopup = ({ message = "", messageType, content }) => {
  const win = new BrowserWindow({
    title: "HL7 Mapping Table",
    modal: true,
    width: 800,
    height: 600,
    show: false,
  });

  content.includes("http")
    ? win.loadURL(content)
    : win.loadURL(
        `data:text/html;charset=utf-8,${combineContentHtml(message, content)}`
      );
  win.once("ready-to-show", () => {
    win.show();
  });
};

export { openUrlPopup };
