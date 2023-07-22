import React from "react";
import { openUrlPopup } from "../../utils/electron/windowHelper";
import Button from "./Button";
const remote = window.require("@electron/remote");
const { dialog } = remote;
const { ipcRenderer } = window.require("electron");

const Table = ({ messageType, message, headerArr, data, content }) => {
  const sendTableData = ({ filePath, tableData, headerData }) => {
    ipcRenderer.send("get-table-data", {
      filePath,
      messageType,
      tableData,
      headerData,
    });
  };

  // ipcRenderer.on("send-file-name", (event, arg) => {
  //   console.log(arg);
  // });

  return (
    <>
      {data ? (
        <>
          <table id="parsed">
            <thead>
              <tr>
                {headerArr.map((header) => {
                  return (
                    <th
                      style={
                        data.length === 0 ? {} : { border: "1px solid black" }
                      }
                    >
                      {header}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody
              style={data.length === 0 ? {} : { border: "1px solid black" }}
            >
              {data.map((row, rowIndex) =>
                row.map((cell, cellIndex) => {
                  if (cell === undefined) return;

                  return (
                    <tr key={`${rowIndex}-${cellIndex}`}>
                      <td style={{ border: "1px solid black" }}>{cell[0]}</td>
                      <td style={{ border: "1px solid black" }}>{cell[2]}</td>
                      <td style={{ border: "1px solid black" }}>{cell[1]}</td>
                      <td style={{ border: "1px solid black" }}>{cell[3]}</td>
                      <td style={{ border: "1px solid black" }}>{cell[4]}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            {/* //* Buttons are not working in child window.  */}
            {/* //TODO: Figure out how to trigger React functions in Electron's child window} */}
            <Button
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
              text="Export to Excel"
              onClick={() =>
                dialog
                  .showSaveDialog({
                    title: "Save Mapped Table",
                    filters: [
                      {
                        name: "Excel",
                        extensions: ["xlsx"],
                      },
                    ],
                  })
                  .then((file) => {
                    if (file.filePath !== "") {
                      sendTableData({
                        filePath: file.filePath.toString(),
                        messageType,
                        tableData: data,
                        headerData: headerArr,
                      });
                    }
                  })
              }
            />
            <Button
              text="Open in Separate Window"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
              onClick={() => {
                data.length === 0
                  ? alert(
                      "Nothing to show. Please enter a valid HL7 message first."
                    )
                  : openUrlPopup({
                      message,
                      messageType,
                      content,
                    });
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Table;
