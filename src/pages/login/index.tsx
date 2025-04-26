import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/features/auth/forms";
import React from "react";
import { Link } from "react-router";

interface Props {}

export const Login: React.FC<Props> = ({}) => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Card className="w-md">
        <CardHeader>
          <CardTitle className="text-3xl">Welcome Back</CardTitle>
          <CardDescription className="text-base">
            Log in to your account to access all your features and continue
            where you left off.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <LoginForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-base text-muted-foreground">
            Don’t have an account?{" "}
            <Link to="/a/r" className="text-primary hover:underline ml-1">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};
