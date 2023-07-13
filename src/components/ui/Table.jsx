import React from "react";
import Button from "./Button";
import { exportToExcel } from "../../utils/pure/exportToExcel";
// import { useSelector } from "react-redux";

const Table = ({ data }) => {
  //   const tableData = useSelector((state) => state.excelExporter);
  //   console.log(tableData);
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
      {/* <Button
        text="Export to Excel"
        // onClick={() => exportToExcel(tableData.message)}
        onClick={() => exportToExcel(data)}
      /> */}
    </>
  );
};

export default Table;
