import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface OrganizationState {
  organization: string;
}

const initialState: OrganizationState = {
  organization: "",
};

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    setCurrentOrganization: (
      state,
      action: PayloadAction<{ type: string }>,
    ) => {
      state.organization = action.payload.type;
    },
  },
});

export const { setCurrentOrganization } = organizationSlice.actions;

export default organizationSlice.reducer;

export const selectOrganisationType = (state: RootState) =>
  state.organization.organization;
