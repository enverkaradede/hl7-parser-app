// new "remote" usage after Electron version 5.0.0
const remote = window.require("@electron/remote");
const { BrowserWindow, dialog, Menu } = remote;

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
