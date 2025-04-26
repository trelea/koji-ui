import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api";
import * as yup from "yup";
import { loginSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { deserializeRtkQueryError } from "@/utils";
import { useAppDispatch } from "@/store";
import { authUser } from "@/store/slices";

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const redirect = useNavigate();
  const [mutate, { isError, isLoading, isSuccess, isUninitialized }] =
    useLoginMutation();

  const form = useForm<yup.InferType<typeof loginSchema>>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: undefined, password: undefined },
  });

  const onSubmit = async (data: yup.InferType<typeof loginSchema>) => {
    const response = await mutate(data);

    if (response.error) {
      const { status } = deserializeRtkQueryError<{ message: string }>(
        response.error,
        {
          toasts: [(err) => err.data.message, (err) => err.message],
        }
      );

      if (status === 428) redirect("/a/s", { replace: true });

      return;
    }

    dispatch(authUser(response.data));
    redirect("/c", { replace: true });
  };

  return { form, onSubmit, isError, isLoading, isSuccess, isUninitialized };
};
