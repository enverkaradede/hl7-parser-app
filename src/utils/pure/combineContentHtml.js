const combineContentHtml = (messageContent, tableContent) => {
  const combinedHtml = `<body>
        <h2>Original Message</h2>
        <pre>${messageContent}</pre>
        </br>
        </br>
        <h2>Mapping Table</h2>
        ${tableContent}
    </body>`;

  return combinedHtml;
};

export { combineContentHtml };
