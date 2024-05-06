/**
 * install  Yup. 
 * Define a Yup validation schema for a more complex form. 
 * Include validation rules for fields like email, password, and phone number. 
 * Ensure that error messages are displayed for each validation rule.
Implement real-time validation feedback using Material-UI's TextField component. 
Show validation errors as the user types, and 
clear the errors when the input is valid.(Use Formik as well)
 */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { validationSchema } from "./FormSchema";

const FormikForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" placeholder="Enter Name" />
          <br />
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <br />
          <label htmlFor="phoneNumber">Phone No.</label>
          <Field
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit Form</button>
          <br />
          <ErrorMessage name="name" />
          <br />
          <ErrorMessage name="email" />
          <br />
          <ErrorMessage name="password" />
          <br />
          <ErrorMessage name="confirmPassword" />
          <br />
          <ErrorMessage name="phoneNumber" />
        </Form>
      </Formik>
    </>
  );
};
export default FormikForm;
