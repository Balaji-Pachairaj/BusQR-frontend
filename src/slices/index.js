import { configureStore } from "@reduxjs/toolkit";
import masterSlice from "./masterslice";

export const store = configureStore({
  reducer: {
    master: masterSlice.reducer,
  },
});
