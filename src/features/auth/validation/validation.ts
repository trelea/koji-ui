import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(24).required(),
});

export const registerSchema = yup.object().shape({
  name: yup.string().min(3).max(24).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(24).required(),
});
