import { baseApi } from "@/store/api";
import {
  LoginRequestType,
  LoginResponseType,
  RegisterRequestType,
  RegisterResponseType,
  VerifyOtpCodeRequestType,
  VerifyOtpCodeResponseType,
  VerifyOtpTokenRequestType,
  VerifyOtpTokenResponseType,
} from "../types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * register api
     */
    register: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
    }),

    /**
     * login api
     */
    login: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
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

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyOtpTokenQuery,
  useVerifyOtpCodeMutation,
} = authApi;
