import { useForm } from "react-hook-form";
import * as yup from "yup";
import { otpSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useVerifyOtpCodeMutation } from "../api";
import { deserializeRtkQueryError } from "@/utils";
import { useNavigate } from "react-router";

export const useSubmitOtp = () => {
  const redirect = useNavigate();
  const [mutate, { isError, isLoading, isSuccess, isUninitialized }] =
    useVerifyOtpCodeMutation();
  const form = useForm<yup.InferType<typeof otpSchema>>({
    resolver: yupResolver(otpSchema),
    defaultValues: { otp: undefined },
  });

  const onSubmit = async (
    data: yup.InferType<typeof otpSchema>,
    _tkn: string
  ) => {
    const response = await mutate({ body: data, query: { _tkn } });

    if (response.error) {
      const { status } = deserializeRtkQueryError<{ message: string }>(
        response.error,
        {
          toasts: [(err) => err.data.message, (err) => err.message],
        }
      );
      if (status === 428) redirect("/a/s");
      return;
    }
  };

  return { form, onSubmit, isError, isLoading, isSuccess, isUninitialized };
};
