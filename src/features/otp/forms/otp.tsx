import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";
import { useSubmitOtp } from "../hooks";
import { Spinner } from "@/components/ui/spinner";

interface Props {
  _tkn: string;
}
export const OtpForm: React.FC<Props> = ({ _tkn }) => {
  const { form, onSubmit, isLoading } = useSubmitOtp();
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data, _tkn))}
        className="w-[400px] flex flex-col gap-4 justify-center items-center"
      >
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="text-xl" />
                    <InputOTPSlot index={1} className="text-xl" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} className="text-xl" />
                    <InputOTPSlot index={3} className="text-xl" />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} className="text-xl" />
                    <InputOTPSlot index={5} className="text-xl" />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isLoading}
          type="submit"
          size={"lg"}
          className="w-full"
        >
          {isLoading ? (
            <Spinner size={"small"} className="text-background" />
          ) : (
            `Submit`
          )}
        </Button>
      </form>
    </Form>
  );
};
