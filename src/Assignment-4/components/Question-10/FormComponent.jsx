import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
const FormComponenet = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  return (
    <>
      <TextField
        style={{
          marginRight: "10px",
        }}
        helperText="Enter the First Name"
        errorText="Enter the First Name"
        required
        label="First Name"
        variant="outlined"
        value={user.firstName}
        onChange={(e) => {
          const updateValue = { firstName: e.target.value };
          setUser({ ...user, ...updateValue });
        }}
      />
      <TextField
        helperText="Enter the Last Name"
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
        helperText="Enter the username"
        label="Username"
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
        helperText="Enter the password"
        label="Password"
        variant="outlined"
        value={user.password}
        onChange={(e) => {
          const updateValue = { password: e.target.value };
          setUser({ ...user, ...updateValue });
        }}
      />
      <br />
      <br />
      <Button variant="outlined">Sign Up</Button>
    </>
  );
};

export default FormComponenet;
