import React from "react";
import { openUrlPopup } from "../../utils/electron/windowHelper";
import Button from "./Button";
const remote = window.require("@electron/remote");
const { dialog } = remote;
const { ipcRenderer } = window.require("electron");

const Table = ({ messageType, message, data, content }) => {
  const sendTableData = ({ filePath, tableData }) => {
    ipcRenderer.send("get-table-data", { filePath, messageType, tableData });
  };

  ipcRenderer.on("send-file-name", (event, arg) => {
    console.log(arg);
  });

  return (
    <>
      <table id="parsed" style={{ display: "flex", alignSelf: "center" }}>
        <tbody style={data.length === 0 ? {} : { border: "1px solid black" }}>
          {data.map((row, rowIndex) =>
            row.map((cell, cellIndex) => {
              if (cell === "" || cell === row[0]) return null;

              return (
                <tr key={`${rowIndex}-${cellIndex}`}>
                  <td
                    style={{ border: "1px solid black", fontWeight: "bold" }}
                  >{`${row[0]}.${cellIndex}`}</td>
                  <td style={{ border: "1px solid black" }}>{cell}</td>
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
                  console.log("burda", file);
                  sendTableData({
                    filePath: file.filePath.toString(),
                    messageType,
                    tableData: data,
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
  );
};

export default Table;
