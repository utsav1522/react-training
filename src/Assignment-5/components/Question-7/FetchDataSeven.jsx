import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";

const FetchDataSeven = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const style = {
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
  };
  const initialValues = {
    name: "",
    username: "",
    email: "",
  };

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          name: values.name,
          email: values.email,
          username: values.username,
        }
      );
      console.log(response);
      if (response.status !== 201) {
        throw response;
      } else {
        setResponse(response);
      }
    } catch (err) {
      setError(err.message);
    }
    values.name = "";
    values.email = "";
    values.username = "";
    // console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            style={style}
            name="name"
            placeholder="enter the full name"
          />
          <ErrorMessage name="name" />
          <br />
          <label htmlFor="username">Username</label>
          <Field
            id="username"
            style={style}
            name="username"
            placeholder="Enter username"
          />
          <ErrorMessage name="username" />
          <br />
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            style={style}
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage name="email" />
          <br />
          <button style={style} type="submit">
            Submit form
          </button>
        </Form>
      </Formik>
      <div>
        {error !== "" ? <h1>{error}</h1> : null}
        {response.length !== 0 ? (
          <h1
            style={{
              color: "greens",
            }}
          >
            Response Status: {response.status}
          </h1>
        ) : null}
      </div>
    </>
  );
};

export default FetchDataSeven;
