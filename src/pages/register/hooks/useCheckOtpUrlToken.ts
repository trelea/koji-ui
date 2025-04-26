import { useVerifyOtpTokenQuery } from "@/features/auth/api";
import { useQueryState } from "nuqs";
import React from "react";
import { toast } from "sonner";

export const useCheckOtpUrlToken = () => {
  const [token, setToken] = useQueryState("_otp_access_token");
  const { error, isError, isLoading, isFetching } = useVerifyOtpTokenQuery(
    token as string,
    { skip: !token }
  );

  React.useEffect(() => {
    if (error || isError) {
      setToken(null);
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
