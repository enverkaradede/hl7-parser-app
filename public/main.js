const { app, BrowserWindow, shell } = require("electron");

const remoteMain = require("@electron/remote/main");
remoteMain.initialize();

const createWindow = () => {
  // create the main app window from BrowserWindow
  const win = new BrowserWindow({
    title: "HL7 Parser",
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false, //? Check if there is a safer solution
    },
  });

  win.removeMenu();

  //   const childWin = new BrowserWindow({
  //     parent: win,
  //     modal: true,
  //     show: false,
  //     width: 1600,
  //     height: 900,
  //   });

  //   childWin.removeMenu();
  //   childWin.loadURL("https://google.com");
  //   childWin.once("ready-to-show", () => {
  //     childWin.show();
  //   });

  // load React main page (index.html)
  win.loadURL("http://127.0.0.1:3000");

  // open chromeium dev tool in detached window mode
  //   win.webContents.openDevTools({ mode: "detach" });

  remoteMain.enable(win.webContents);
};

// open app whenever initializations done
app.whenReady().then(() => {
  createWindow();

  // exception for Mac OS allows re-opening an application window
  //   if the application would not closed by CMD + Q
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// exception for Mac OS allows the application to run in background
//   until user quits from the application with CMD + Q
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
