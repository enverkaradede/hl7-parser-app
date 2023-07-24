const e4n = require("excel4node");

const excelExport = ({ filePath, messageType, tableData, headerData }) => {
  let rowNum = 1;
  let colNum = 1;

  const workbook = new e4n.Workbook();

  const sheetHeader = workbook.createStyle({
    font: {
      color: "#000000",
      size: 16,
      bold: true,
    },
    alignment: {
      horizontal: "center",
      vertical: "center",
    },
  });

  const messageTypeHeader = workbook.createStyle({
    font: {
      color: "#000000",
      size: 14,
      bold: true,
    },
    alignment: {
      vertical: "center",
    },
  });

  const generalCellStyle = workbook.createStyle({
    alignment: {
      vertical: "center",
    },
    border: {
      left: {
        style: "thin",
        color: "black",
      },
      right: {
        style: "thin",
        color: "black",
      },
      top: {
        style: "thin",
        color: "black",
      },
      bottom: {
        style: "thin",
        color: "black",
      },
      outline: false,
    },
  });

  const tableHeaderStyle = workbook.createStyle({
    font: {
      color: "#FFFFFF",
      size: 12,
      bold: true,
    },
    fill: {
      type: "pattern",
      patternType: "solid",
      fgColor: "000000",
    },
  });

  const worksheet = workbook.addWorksheet(messageType);
  rowNum = 12;
  colNum = 1;

  headerData.map((header) => {
    worksheet.cell(rowNum, colNum++).string(header).style(tableHeaderStyle);
  });

  tableData.map((segment) => {
    segment.map((field) => {
      if (field == "" || field == segment[0]) return null;
      rowNum++;
      colNum = 1;
      worksheet.cell(rowNum, colNum++).string(field[0]).style(generalCellStyle);
      worksheet.cell(rowNum, colNum++).string(field[2]).style(generalCellStyle);
      worksheet.cell(rowNum, colNum++).string(field[1]).style(generalCellStyle);
      worksheet.cell(rowNum, colNum++).string(field[3]).style(generalCellStyle);
      worksheet.cell(rowNum, colNum++).string(field[4]).style(generalCellStyle);
    });
  });

  colNum = 1;
  rowNum = 5;

  worksheet.cell(rowNum, colNum).string(messageType).style(messageTypeHeader);
  rowNum = 7;

  worksheet.cell(rowNum, colNum).string("Field Name");

  workbook.write(filePath);

  return { fileName: "Excel.xlsx" };
};

module.exports = { excelExport };
