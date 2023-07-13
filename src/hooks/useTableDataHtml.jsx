import { renderToString } from "react-dom/server";
// import { useDispatch } from "react-redux";
// import { setTableData } from "../utils/slicers/ExcelExportSlicer";

const useTableData = (tableComponent) => {
  const tableDataHtml = renderToString(tableComponent).replace("#", "&num;");

  //   const dispatch = useDispatch();

  //   dispatch(setTableData(tableDataHtml));

  return { tableDataHtml };
};

export { useTableData };
