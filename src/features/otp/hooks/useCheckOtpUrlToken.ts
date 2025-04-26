import { useQueryState } from "nuqs";
import React from "react";
import { toast } from "sonner";
import { useVerifyOtpTokenQuery } from "../api";

export const useCheckOtpUrlToken = () => {
  const [token] = useQueryState("_otp_access_token");
  const { error, isError, isLoading, isFetching } = useVerifyOtpTokenQuery(
    token as string,
    { skip: !token }
  );

  React.useEffect(() => {
    if (error || isError) {
      toast("An Error Occurred", {
        description: error?.message,
        action: {
          label: "Close",
          onClick: () => {},
        },
      });
    }
  }, [error, isError]);

  return { token, loading: isLoading || isFetching };
};
