/* eslint-disable no-undef */
import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/store";
import { baseUrl, RtkTypeTags } from "../helpers/constant";
import { setCredentials } from "../features/auth/authSlice";

interface ErrorData {
  status: boolean | number;
  message: string;
}

export interface RefreshTokenData {
  token: string;
}
export interface RefreshTokenResponse {
  data: {
    token: string;
    user: any;
  };
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const state = getState() as RootState;
    const token = state.auth.token; // Correctly access the token
    console.log(token);
    if (token && endpoint !== "login") {
      // headers.set("Content-Type", "multipart/form-data");
      // headers.set("Content-Type", "application/json");
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // console.log(result);

  if (
    result.error &&
    "data" in result.error &&
    (result.error.data as ErrorData).status === 401 &&
    (result.error.data as ErrorData).message ===
      "Please login to be authenticated"
  ) {
    // Handle token expiration logic
    console.log("Token has expired!");
    const refreshResult = await baseQuery(
      {
        url: "auth/refresh_token",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      api,
      extraOptions,
    );
    if (refreshResult?.data) {
      // console.log("man");
      // console.log(refreshResult?.data);
      const refreshData = refreshResult.data as RefreshTokenResponse;
      // console.log(refreshData?.data?.token);
      // const user = (api.getState() as RootState).auth.user;
      const state = api.getState() as RootState;
      const user = state.auth.user;
      // api.dispatch(setCredentials({ ...refreshResult.data, user }));
      api.dispatch(
        setCredentials({ token: refreshData?.data?.token, data: user }),
      );
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({}),
  tagTypes: RtkTypeTags,
});
