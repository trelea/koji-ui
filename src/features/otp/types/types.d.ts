export type VerifyOtpTokenResponseType = boolean;
export type VerifyOtpTokenRequestType = string;

export type VerifyOtpCodeResponseType = boolean;
export type VerifyOtpCodeRequestType = {
  body: { otp: string };
  query: RegisterResponseType;
};
