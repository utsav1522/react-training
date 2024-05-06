import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string("must be a string")
    .required("required")
    .min(2, "name length too short")
    .matches(/^[a-zA-z]/, "not in a valid format")
    .trim(),
  email: Yup.string()
    .email("incorrect email format")
    .required("required")
    .trim(),
  username: Yup.string().min(8).required(),
});
