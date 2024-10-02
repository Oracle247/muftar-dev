import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import authSlice from "../features/auth/authSlice";
import dashboardSlice from "../features/dashboards/dashboardSlice";
import organizationSlice from "src/features/organization/organizationSlice";

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice,
  dashboard: dashboardSlice,
  organization: organizationSlice,
});

export default reducer;
