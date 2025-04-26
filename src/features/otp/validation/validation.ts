import * as yup from "yup";

export const otpSchema = yup.object().shape({
  otp: yup
    .string()
    .matches(/^\d+$/, "OTP must contain only numbers")
    .required(),
});
