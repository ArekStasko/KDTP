import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KdtpApi = createApi({
  reducerPath: "emptyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (_) => ({}),
  tagTypes: ["Players"],
});

export default KdtpApi;
