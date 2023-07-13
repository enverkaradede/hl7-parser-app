import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const exportToExcel = (tableData) => {
  console.log(tableData);
  const worksheet = XLSX.utils.table_to_sheet(tableData.tableData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const fileName = "table.xlsx";
  saveAs(data, fileName);
};
export { exportToExcel };
