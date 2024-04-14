import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = Yup.object({
  username: Yup.string("must be a string")
    .email("Enter a valid username")
    .required("Required"),
    
  password: Yup.string()
    .required("Required")
    .matches(passwordRules, "Plese create a strong password"),
});
