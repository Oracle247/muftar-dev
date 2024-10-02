import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface OnBoardingState {
  skip: boolean;
  complete: boolean;
  idValidated: boolean;
}

const initialState: OnBoardingState = {
  skip: false,
  complete: false,
  idValidated: false,
};

const dashboardSlice = createSlice({
  name: "dashbaord",
  initialState,
  reducers: {
    setBoardingCredentials: (
      state,
      action: PayloadAction<{ skip: boolean; complete: boolean }>,
    ) => {
      state.skip = action.payload.skip;
      state.complete = action.payload.complete;
    },
    setIdValidated: (state, action: PayloadAction<{ validated: boolean }>) => {
      state.idValidated = action.payload.validated;
    },
    clearCredentials: (state) => {
      state.skip = false;
      state.complete = false;
      state.idValidated = false;
    },
  },
});

export const { setBoardingCredentials, setIdValidated } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;

export const selectSkip = (state: RootState) => state.dashboard.skip;
export const selectComplete = (state: RootState) => state.dashboard.complete;
export const selectIdValidated = (state: RootState) =>
  state.dashboard.idValidated;
