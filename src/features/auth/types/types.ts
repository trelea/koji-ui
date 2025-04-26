import { UserDetailsType } from "@/store/slices";

export type RegisterResponseType = { _tkn: string };
export type RegisterRequestType = {
  email: string;
  password: string;
  name: string;
};

export type LoginResponseType = {
  id: string;
  email: string;
  name: string;
  details: UserDetailsType | null;
};
export type LoginRequestType = Omit<RegisterRequestType, "name">;

export type VerifyOtpTokenResponseType = boolean;
export type VerifyOtpTokenRequestType = string;

export type VerifyOtpCodeResponseType = boolean;
export type VerifyOtpCodeRequestType = {
  body: { otp: string };
  query: RegisterResponseType;
};
