import * as yup from "yup";

export const thumbSchema = yup.object().shape({
  thumb: yup.mixed<File[]>().required(),
  // .test(
  //   "fileSize",
  //   "File is too large (max 50KB)",
  //   (file) =>
  //     !file || (file instanceof File && file.size <= 1024 * 1024 * 1024)
  // ),
});

export const hashnameSchema = yup.object().shape({
  hashname: yup
    .string()
    .min(3)
    .max(5)
    .matches(/^[a-zA-Z0-9_]+$/, {
      message: "hashname can only contain letters, numbers, and underscores",
    })
    .required(),
});

export const dateBirthSchema = yup.object().shape({
  date_birth: yup.date().required(),
});

export const descriptionAndBioSchema = yup.object().shape({
  description: yup.string().min(0).max(200).optional(),
  bio: yup.string().min(0).max(200).optional(),
});
