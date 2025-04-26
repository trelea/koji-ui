import { baseApi } from "@/store/api";
import {
  VerifyOtpCodeResponseType,
  VerifyOtpTokenResponseType,
  VerifyOtpCodeRequestType,
  VerifyOtpTokenRequestType,
} from "../types";

export const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * verify otp token
     */
    verifyOtpToken: builder.query<
      VerifyOtpTokenResponseType,
      VerifyOtpTokenRequestType
    >({
      query: (token) => ({
        url: "/otp/verify",
        method: "GET",
        params: {
          _tkn: token,
        },
      }),
    }),

    /**
     * verify otp code
     */
    verifyOtpCode: builder.mutation<
      VerifyOtpCodeResponseType,
      VerifyOtpCodeRequestType
    >({
      query: ({ body, query: { _tkn } }) => ({
        url: `/otp/verify`,
        method: "POST",
        data: body,
        params: {
          _tkn,
        },
      }),
    }),
  }),
});

export const { useVerifyOtpCodeMutation, useVerifyOtpTokenQuery } = otpApi;
