import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { OtpForm } from "@/features/otp/forms";
import { useCheckOtpUrlToken } from "@/features/otp/hooks";
import React from "react";

interface Props {}

export const Otp: React.FC<Props> = ({}) => {
  const { token, loading } = useCheckOtpUrlToken();
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <Card className="w-md">
          <CardHeader>
            <CardTitle className="text-3xl">
              {token ? `Verify Your Email` : `Link Expired or Invalid`}
            </CardTitle>
            <CardDescription className="text-base">
              {token
                ? "We've sent a 6-digit verification code to your email address. Please enter it below to complete your registration. This code expires in 5 minutes."
                : "The verification link you used is either invalid or has expired. Please request a new one."}
            </CardDescription>
          </CardHeader>
          {token && (
            <>
              <CardContent className="flex justify-center items-center">
                <OtpForm _tkn={token as string} />
              </CardContent>
              <CardFooter className="justify-center">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the code? Check your spam folder or request a
                  new code.
                </p>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </main>
  );
};
