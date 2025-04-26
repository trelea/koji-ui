import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../api";
import * as yup from "yup";
import { registerSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryState } from "nuqs";
import { deserializeRtkQueryError } from "@/utils";

export const useRegister = () => {
  const token = useQueryState("_otp_access_token");
  const [mutate, { isError, isLoading, isSuccess, isUninitialized }] =
    useRegisterMutation();

  const form = useForm<yup.InferType<typeof registerSchema>>({
    resolver: yupResolver(registerSchema),
    defaultValues: { email: undefined, name: undefined, password: undefined },
  });

  const onSubmit = async (data: yup.InferType<typeof registerSchema>) => {
    const response = await mutate(data);

    if (response.error)
      return deserializeRtkQueryError<{ message: string }>(response.error, {
        toasts: [(err) => err.data.message, (err) => err.message],
      });

    if (response.data?._tkn) token[1](response.data?._tkn as string);
  };

  return { form, onSubmit, isError, isLoading, isSuccess, isUninitialized };
};
