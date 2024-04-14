import { validationSchema } from "./validationSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("Login Form submitted Successfully for ", values.username);
  };
  return (
    <div>
      <h1>Login Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="usernameInput">Username</label>
          <Field
            data-test-id="usernameInput"
            type="email"
            id="usernameInput"
            name="username"
            placeholder="Enter Username"
          />
          <ErrorMessage name="username" />
          <br />
          <label htmlFor="passwordInput">Password</label>
          <Field
            data-test-id="passwordInput"
            type="password"
            id="passwordInput"
            name="password"
            placeholder="Enter Password"
          />
          <ErrorMessage name="password" />
          <button type="submit">Submit Form</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
