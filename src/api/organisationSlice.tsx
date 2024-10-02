import { apiSlice } from "./apiSlice";

export const organisationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrganisations: builder.query({
      query: () => ({
        url: `organization/fetch`,
        method: "GET",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [{ type: "Organization", id: result.id }]
          : [{ type: "Organization" }],
    }),
    organisationUpdate: builder.mutation({
      query: (value) => ({
        url: `organization/update/${value?.id}`,
        method: "POST",
        body: value,
      }),
      invalidatesTags: [{ type: "Organization" }],
    }),
    joinOrganization: builder.mutation({
      query: (value) => ({
        url: `organization/join/${value?.id}`,
        method: "POST",
        body: value,
      }),
    }),
  }),
});

export const {
  useGetOrganisationsQuery,
  useOrganisationUpdateMutation,
  useJoinOrganizationMutation,
} = organisationApiSlice;
