import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authAPISlice } from "../../api/authApiSlice";
import { RootState } from "../../store/store";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  email_verified: boolean;
  status: string;
  updated_at: string;
  created_at: string;
  // Add other user properties here
  [key: string]: any;
}

interface AuthState {
  // user: User | null;
  user: any;
  token: string | null;
  role: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  role: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        data: User;
        token: string;
        refreshToken?: string;
      }>,
    ) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken;
      }
      // state.role = action.payload.user.role;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authAPISlice.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<{ data: User; token: string }>) => {
        state.user = action.payload.data;
        state.token = action.payload.token;
        sessionStorage.setItem("muftar-token", JSON.stringify(action.payload));
      },
    );
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentLoginUser = (state: RootState) => state.auth.user;
export const selectCurrentLoginToken = (state: RootState) => state.auth.token;
export const selectCurrentLoginRole = (state: RootState) => state.auth.role;
