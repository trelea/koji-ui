import { LoginResponseType } from "@/features/auth/types";
import React from "react";

export type SetupProfileResponseType = LoginResponseType;
export type SetupProfileRequestType = FormData;

export type SetupStepType = {
  step: number;
  title: string;
  description: string;
  footer: React.ReactNode;
  form: ({
    next,
    prev,
  }: {
    next?: (data?: unknown) => void | unknown;
    prev?: () => void | unknown;
  }) => React.ReactNode;
};
