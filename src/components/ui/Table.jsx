import React from "react";
// import Button from "./Button";

const Table = ({ data }) => {
  return (
    <>
      <table style={{ display: "flex", alignSelf: "center" }}>
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
      {/* <Button text="Export to Excel" onClick={() => exportToExcel(tableData)} /> */}
    </>
  );
};

export default Table;
