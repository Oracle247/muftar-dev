import { apiSlice } from "./apiSlice";
import { API_ROUTE } from "src/helpers/constant";

export const authAPISlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (value) => ({
        url: API_ROUTE.LOGIN,
        method: "POST",
        body: value,
        token: "",
      }),
    }),
    signup: builder.mutation({
      query: (value) => {
        // console.log(value);
        return {
          url: API_ROUTE.SIGN_UP,
          method: "POST",
          body: { ...value },
        };
      },
    }),
    resetPasswordEmail: builder.mutation({
      query: (value) => ({
        url: API_ROUTE.RESET_PASSWORD_EMAIL,
        method: "POST",
        body: { ...value },
      }),
    }),
    resetPassword: builder.mutation({
      query: (value) => ({
        url: API_ROUTE.RESET_PASSWORD,
        method: "POST",
        body: { ...value },
      }),
    }),
    emailVerification: builder.mutation({
      query: (value) => ({
        url: `auth/verify-otp?otp=${value?.otp}&email=${value?.email}`,
        method: "POST",
        body: { ...value },
      }),
    }),
    resendOTP: builder.mutation({
      query: (value) => ({
        url: API_ROUTE.RESEND_OTP,
        method: "POST",
        body: { ...value },
      }),
    }),
    googleSignUp: builder.query({
      query: () => ({
        url: API_ROUTE?.GOOGLE_SIGNUP,
        method: "GET",
      }),
    }),
    confirmIdVerification: builder.query({
      query: () => ({
        url: API_ROUTE?.ID_CONFIRMATION,
        method: "GET",
      }),
    }),
    idVerifcation: builder.mutation({
      query: (value) => ({
        url: API_ROUTE.ID_VERIFICATION,
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Profile"],
    }),
    onBoarding: builder.mutation({
      query: (value) => ({
        url: `user/${value?.id}/onboarding`,
        method: "POST",
        body: { action: value?.action },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useEmailVerificationMutation,
  useResendOTPMutation,
  useGoogleSignUpQuery,
  useIdVerifcationMutation,
  useConfirmIdVerificationQuery,
  useResetPasswordEmailMutation,
  useResetPasswordMutation,
  useOnBoardingMutation,
} = authAPISlice;
