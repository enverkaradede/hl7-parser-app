import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tableData: "",
};

const excelExporterSlice = createSlice({
  name: "excelExporter",
  initialState,
  reducers: {
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
  },
});

export const { setTableData } = excelExporterSlice.actions;
export default excelExporterSlice.reducer;
