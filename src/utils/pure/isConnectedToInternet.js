const isConnectedToInternet = () => {
  console.log(navigator.onLine);
  return navigator.onLine;
};

export { isConnectedToInternet };
