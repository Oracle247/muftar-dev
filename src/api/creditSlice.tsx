import { apiSlice } from "./apiSlice";

export const creditApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWalletBalance: builder.query({
      query: () => ({
        url: `wallets/balance`,
        method: "GET",
      }),
      providesTags: (result, error, arg) =>
        result ? [{ type: "Credit", id: result.id }] : [{ type: "Credit" }],
    }),
    addCredit: builder.mutation({
      query: (value) => ({
        url: "wallets/add",
        method: "POST",
        body: value,
      }),
      invalidatesTags: [{ type: "Credit" }],
    }),
  }),
});

export const { useGetWalletBalanceQuery, useAddCreditMutation } =
  creditApiSlice;
