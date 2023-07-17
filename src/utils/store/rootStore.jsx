import { configureStore } from "@reduxjs/toolkit";
import hl7Reducer from "./slicers/Hl7MessageSlicer";
import excelExporterReducer from "./slicers/ExcelExportSlicer";

const rootReducer = {
  hl7: hl7Reducer,
  excelExporter: excelExporterReducer,
};

const rootStore = configureStore({
  reducer: rootReducer,
});

export default rootStore;
