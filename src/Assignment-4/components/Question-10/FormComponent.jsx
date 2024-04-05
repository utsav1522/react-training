/**
 * Create a form with Material-UI text fields
 * and implement form validation.
 * Ensure that error messages are displayed when the user enters invalid data.
 */

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Modal } from "@mui/material";
import { useState } from "react";
const FormComponenet = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [submitStatus, setSubmitStatus] = useState(false);

  const checkFirstName = () => {
    const pattern = "^(?=.*\\d)";
    if (user.firstName.match(pattern)) {
      return true;
    }

    return false;
  };
  const checkLastName = () => {
    const pattern = "^(?=.*\\d)";
    if (user.lastName.match(pattern)) {
      return true;
    }

    return false;
  };
  const checkPassword = () => {
    const pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
    if (user.password.toString().length < 8) {
      return true;
    } else if (!user.password.match(pattern)) {
      return true;
    }
    return false;
  };

  const validateFeilds = () => {
    if (
      checkFirstName() === false &&
      checkLastName() === false &&
      checkPassword() === false
    ) {
      setSubmitStatus(true);
    }
  };

  return (
    <>
      <form>
        <TextField
          style={{
            marginRight: "10px",
          }}
          required
          helperText={
            checkFirstName()
              ? "Enter name in correct format"
              : "Enter the First Name"
          }
          error={checkFirstName()}
          label="First Name"
          variant="outlined"
          value={user.firstName}
          onChange={(e) => {
            const updateValue = { firstName: e.target.value };
            setUser({ ...user, ...updateValue });
          }}
        />
        <TextField
          required
          helperText={
            checkLastName()
              ? "Enter name in correct format"
              : "Enter the Last Name"
          }
          error={checkLastName()}
          label="Last Name"
          variant="outlined"
          value={user.lastName}
          onChange={(e) => {
            const updateValue = { lastName: e.target.value };
            setUser({ ...user, ...updateValue });
          }}
        />
        <br />
        <TextField
          style={{
            marginTop: "10px",
          }}
          required
          helperText={"Enter the username"}
          label="Username"
          error={!user.username}
          variant="outlined"
          value={user.username}
          onChange={(e) => {
            const updateValue = { username: e.target.value };
            setUser({ ...user, ...updateValue });
          }}
        />

        <TextField
          style={{
            marginTop: "10px",
            marginLeft: "10px",
          }}
          required
          helperText="Enter the password"
          label="Password"
          type="password"
          error={checkPassword()}
          variant="outlined"
          value={user.password}
          onChange={(e) => {
            const updateValue = { password: e.target.value };
            setUser({ ...user, ...updateValue });
          }}
        />
        <br />
        <br />
        <Button
          // type="submit"
          variant="outlined"
          color={"success"}
          onClick={() => {
            validateFeilds();
          }}
        >
          Sign Up
        </Button>
      </form>
      {submitStatus === true ? (
        <>
          <h1>Form Details</h1>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>Username: {user.username}</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FormComponenet;
