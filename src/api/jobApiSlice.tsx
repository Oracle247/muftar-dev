import { apiSlice } from "./apiSlice";

export const jobApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (value) => ({
        url: `jobs/post/organization/${value?.id}`,
        method: "POST",
        body: { ...value },
      }),
    }),
  }),
});

export const { usePostJobMutation } = jobApiSlice;

// jobs/post/organization/2
