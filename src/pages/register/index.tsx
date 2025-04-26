import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OtpForm, RegisterForm } from "@/features/auth/forms";
import React from "react";
import { Link } from "react-router";
import { useCheckOtpUrlToken } from "./hooks";
import { Spinner } from "@/components/ui/spinner";

interface Props {}

export const Register: React.FC<Props> = () => {
  const { token, loading } = useCheckOtpUrlToken();

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <Card className="w-md">
          <CardHeader>
            <CardTitle className="text-3xl">
              {token ? `Verify Your Email` : `Create an Account`}
            </CardTitle>
            <CardDescription className="text-base">
              {token
                ? `We've sent a 6-digit verification code to your email address. Please enter it below to complete your registration. This code expires in 5 minutes.`
                : `Sign up to unlock all features and enjoy a personalized experience.
              It only takes a minute!`}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            {token ? <OtpForm _tkn={token as string} /> : <RegisterForm />}
          </CardContent>
          <CardFooter className="justify-center">
            {token ? (
              <p className="text-sm text-muted-foreground">
                Didn't receive the code? Check your spam folder or request a new
                code.
              </p>
            ) : (
              <p className="text-base text-muted-foreground">
                Already have an account?{" "}
                <Link to="/a/l" className="text-primary hover:underline ml-1">
                  Log in
                </Link>
              </p>
            )}
          </CardFooter>
        </Card>
      )}
    </main>
  );
};
