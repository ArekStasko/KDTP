import { configureStore } from "@reduxjs/toolkit";
import KdtpApi from "./KdtpApi.ts";

export const store = configureStore({
  reducer: {
    [KdtpApi.reducerPath]: KdtpApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(KdtpApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
