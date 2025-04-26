import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "@/features/auth/forms";
import React from "react";
import { Link } from "react-router";

interface Props {}

export const Register: React.FC<Props> = ({}) => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Card className="w-md">
        <CardHeader>
          <CardTitle className="text-3xl">Create an Account</CardTitle>
          <CardDescription className="text-base">
            Sign up to unlock all features and enjoy a personalized experience.
            It only takes a minute!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <RegisterForm />
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-base text-muted-foreground">
            Already have an account?{" "}
            <Link to="/a/l" className="text-primary hover:underline ml-1">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};
