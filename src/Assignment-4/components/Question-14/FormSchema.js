import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(2, "name length too short")
    .matches(/^[a-zA-z]/)
    .trim(),
  email: Yup.string()
    .email("incorrect email format")
    .required("email is required")
    .trim(),
  password: Yup.string()
    .required("password is required")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$",
      "password format incorrect"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm password is required"),

  phoneNumber: Yup.number("not a number")
    .required("mobile number is required")
    .min(10, "enter a 10 digit number")
    .positive("phone number cannot start with a minus")
    .integer("phone number cannot be decimal"),
});
