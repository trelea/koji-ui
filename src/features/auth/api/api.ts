import { baseApi } from "@/store/api";
import {
  LoginRequestType,
  LoginResponseType,
  RegisterRequestType,
  RegisterResponseType,
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
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
