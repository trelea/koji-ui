import { baseApi } from "@/store/api";
import { SetupProfileResponseType, SetupProfileRequestType } from "../types";

export const setupApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * verify profile setup status
     */
    verifyProfileSetupStatus: builder.query({
      query: () => ({
        url: "/profile/setup/status",
        method: "GET",
      }),
    }),
    /**
     * setup profile
     */
    setupProfile: builder.mutation<
      SetupProfileResponseType,
      SetupProfileRequestType
    >({
      query: (data) => ({
        url: `/profile/setup`,
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useSetupProfileMutation, useVerifyProfileSetupStatusQuery } =
  setupApi;
