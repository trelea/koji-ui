import React from "react";
import { useVerifyProfileSetupStatusQuery } from "../api";
import { deserializeRtkQueryError } from "@/utils";

export const useCheckSetupProfileStatus = () => {
  const { isFetching, isLoading, error, isError } =
    useVerifyProfileSetupStatusQuery(null);

  React.useEffect(() => {
    const { status } = deserializeRtkQueryError<{
      // message: string;
      // status: number;
    }>(error);

    console.log(status);
  }, [error, isError]);

  return { loading: isFetching || isLoading };
};
