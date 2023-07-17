import { renderToString } from "react-dom/server";
// import { useDispatch } from "react-redux";
// import { setTableData } from "../utils/store/slicers/ExcelExportSlicer";
// import { useSelector } from "react-redux";

const useTableData = (tableComponent) => {
  const tableDataHtml = renderToString(tableComponent).replace("#", "&num;");
  //   console.log(tableDataHtml);
  //   const dispatch = useDispatch();

  //   dispatch(setTableData(tableDataHtml));
  //   const tableData = useSelector((state) => state.excelExporter);
  //   console.log(tableData);
  return { tableDataHtml };
};

export { useTableData };
