import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const masterSlice = createSlice({
  name: "MASTER_SLICE",
  initialState,
  reducers: {},
});

export const masterSliceActions = masterSlice.actions;
export default masterSlice;
