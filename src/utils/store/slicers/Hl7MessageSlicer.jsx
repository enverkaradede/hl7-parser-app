import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  messageType: "",
};

const hl7MessageSlice = createSlice({
  name: "hl7",
  initialState,
  reducers: {
    getHl7Text: (state, action) => {
      state.message = action.payload;
    },
    setMessageType: (state, action) => {
      state.messageType = action.payload;
    },
  },
});

export const { getHl7Text, setMessageType } = hl7MessageSlice.actions;
export default hl7MessageSlice.reducer;
