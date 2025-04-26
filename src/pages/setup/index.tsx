import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { steps } from "@/features/setup/config";
import { useCheckSetupProfileStatus } from "@/features/setup/hooks";
import React from "react";

interface Props {}

export const Setup: React.FC<Props> = ({}) => {
  const { loading } = useCheckSetupProfileStatus();
  const [step, setStep] = React.useState<number>(0);

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      {loading ? (
        <Spinner>Loading...</Spinner>
      ) : (
        <Card className="w-md">
          <CardHeader>
            <CardTitle className="text-3xl">{steps[step].title}</CardTitle>
            <CardDescription className="text-base">
              {steps[step].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center">
            {steps[step].form({
              next: () => setStep((s) => s + 1),
              prev: () => setStep((s) => s - 1),
            })}
          </CardContent>
          <CardFooter className="justify-center">
            {steps[step].footer}
          </CardFooter>
        </Card>
      )}
    </main>
  );
};
