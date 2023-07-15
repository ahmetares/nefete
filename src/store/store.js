import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./generalSlice/generalSlice";

export const store = configureStore({
    reducer: {
      general: generalReducer,
    },
  })