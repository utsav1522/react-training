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
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [age, setAge] = useState();

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name...."
      ></input>
      <br></br>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name...."
      ></input>
      <br></br>
      <input
        type="number"
        min={1}
        max={100}
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age...."
      ></input>
      <br></br>
      <h4>
        Name is: {firstName} {lastName}
      </h4>
      <h4>Age is {age}</h4>
    </>
  );
};

export default PersonForm;
