/**
 * 
 * a functional component called PersonForm.
Use the useState hook to manage three state variables: firstName, lastName, and age, all initialized to empty strings.
Render three input fields for the user to enter their first name, last name, and age.
As the user types, update the respective state variables.
Display the entered information below the input fields.
 */

import { useState } from "react";

const PersonForm = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  return (
    <>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => {
          const updateValue = { firstName: e.target.value };
          setName({ ...name, ...updateValue });
        }}
        placeholder="First Name...."
      ></input>
      <br></br>
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => {
          const updateValue = { lastName: e.target.value };
          setName({ ...name, ...updateValue });
        }}
        placeholder="Last Name...."
      ></input>
      <br></br>
      <input
        type="number"
        min={1}
        max={100}
        value={name.age}
        onChange={(e) => {
          const updateValue = { age: Number(e.target.value) };
          setName({ ...name, ...updateValue });
        }}
        placeholder="Age...."
      ></input>
      <br></br>
      <h4>
        Name is: {name.firstName} {name.lastName}
      </h4>
      <h4>Age is: {name.age}</h4>
    </>
  );
};

export default PersonForm;
