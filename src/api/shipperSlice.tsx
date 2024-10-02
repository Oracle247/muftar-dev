import { apiSlice } from "./apiSlice";

export const shipperApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `profile/view`,
        method: "GET",
      }),
    }),
    createShipper: builder.mutation({
      query: (value) => ({
        url: "organization/create",
        method: "POST",
        body: value,
      }),
      invalidatesTags: [{ type: "Organization" }],
    }),
  }),
});

export const { useGetProfileQuery, useCreateShipperMutation } = shipperApiSlice;

// jobs/post/organization/2
