import { apiSlice } from "./apiSlice";

export const profileApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: `profile/view`,
        method: "GET",
      }),
      providesTags: (result, error, arg) =>
        result ? [{ type: "Profile", id: result.id }] : [{ type: "Profile" }],
    }),
    profileUpdate: builder.mutation({
      query: (value) => ({
        url: "profile/update",
        method: "POST",
        body: value,
      }),
      invalidatesTags: [{ type: "Profile" }],
    }),
    passwordUpdate: builder.mutation({
      query: (value) => ({
        url: "profile/change_password",
        method: "POST",
        body: value,
      }),
    }),
    notificationPreferenceUpdate: builder.mutation({
      query: (value) => ({
        url: "profile/notification-preferences",
        method: "POST",
        body: value,
      }),
      invalidatesTags: [{ type: "Profile" }],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useProfileUpdateMutation,
  usePasswordUpdateMutation,
  useNotificationPreferenceUpdateMutation,
} = profileApiSlice;
