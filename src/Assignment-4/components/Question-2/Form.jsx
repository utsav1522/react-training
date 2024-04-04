/**
 * Build a form that includes various input fields
 * like text inputs, checkboxes, and radio buttons.
 * Ensure that each input is a controlled component.
 * When the user submits the form, log the form data to the console.
 */

import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);
  const [address, setAddress] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [gender, setGender] = useState("");

  const validateInputs = () => {
    if (
      name.toString().length < 0 ||
      address.length < 0 ||
      school.length < 0 ||
      college.toString().length < 0
    ) {
      console.error("Inputs are not made correctly");
    } else {
      console.log(`Name: ${name} \n Age: ${age} \n Address: ${address} \n School: ${school} \n College: ${college} \n Gender: ${gender.target.value}
      `);
    }
  };
  return (
    <>
      <h1>Question - 2 Form</h1>

      <table>
        <tr>
          <td>
            <label>Name: </label>
          </td>
          <td>
            <input
              type="text"
              value={name}
              onBlur={(e) => {
                e.target.value.length === 0
                  ? console.error("Enter the name")
                  : console.log(e.target.value);
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </td>
        </tr>

        <tr>
          <td>
            <label>Age: </label>
          </td>
          <td>
            <input
              type="number"
              min={0}
              max={115}
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Address: </label>
          </td>
          <td>
            <input
              type="text"
              value={address}
              onBlur={(e) => {
                e.target.value.length === 0
                  ? console.error("Enter the address")
                  : console.log(e.target.value);
              }}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>School: </label>
          </td>
          <td>
            <input
              type="text"
              value={school}
              onBlur={(e) => {
                e.target.value.length === 0
                  ? console.error("Enter the school name")
                  : console.log(e.target.value);
              }}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>College: </label>
          </td>
          <td>
            <input
              type="text"
              value={college}
              onBlur={(e) => {
                e.target.value.length === 0
                  ? console.error("Enter the college name")
                  : console.log(e.target.value);
              }}
              onChange={(e) => {
                setCollege(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>
            <div onChange={setGender}>
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </td>
        </tr>
        <tr rowSpan="2">
          <td>
            <button
              type="submit"
              onClick={() => {
                validateInputs();
                setName("");
                setAddress("");
                setCollege("");
                setAge(1);
                setSchool("");
              }}
            >
              Submit Form
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};
export default Form;
