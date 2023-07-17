const e4n = require("excel4node");

const excelExport = ({ filePath, messageType, tableData }) => {
  console.log(filePath);
  console.log(tableData);
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
      color: "#000000",
      size: 12,
      bold: true,
    },
    fill: {
      type: "pattern",
      patternType: "solid",
      fgColor: "000000",
    },
  });

  const worksheet = workbook.addWorksheet("Test");
  rowNum = 12;
  colNum = 9;

  worksheet
    .cell(rowNum, colNum, rowNum, colNum + 6, true)
    .string("HL7 Message Mapping")
    .style(tableHeaderStyle);

  tableData.map((segment) => {
    segment.map((field) => {
      if (field == "" || field == segment[0]) return null;
      worksheet
        .cell(++rowNum, colNum, rowNum, colNum + 6, true)
        .string(field)
        .style(generalCellStyle);
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
