/**
 * 
 * a functional component named EmployeeSalary that displays the average salary of a list of employees.
Define an array of employee objects, where each object has a name and salary property.
Use the useMemo hook to calculate the average salary of employees.
Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
Render the average salary on the screen.
Include a button that, when clicked, updates the employee data with new salaries.
 */

import { useMemo, useState } from "react";

const EmployeeSalary = () => {
  let empDetails = [
    { name: "abc", salary: 1000 },
    { name: "def", salary: 2000 },
    { nmae: "ghi", salary: 3000 },
    { name: "jkl", salary: 4000 },
  ];

  const [employee, setEmployee] = useState(empDetails);
  const [nameInput, setNameInput] = useState("");
  const [salaryInput, setSalaryInput] = useState(0);

  const average = useMemo(() => {
    let sumValue = employee.reduce((sum, ele) => {
      return (sum += Number(ele.salary));
    }, 0);

    return sumValue / empDetails.length;
  }, [empDetails.length, employee]);

  const updateEmployee = (name, salary) => {
    setEmployee(
      employee.map((ele) => {
        if (ele.name === name) {
          ele.salary = salary;
        }
        return ele;
      })
    );
  };

  return (
    <>
      <ul>
        {employee.map((ele, index) => {
          return (
            <li key={index + 102030}>
              Name: {ele.name} || Salary: {ele.salary}
            </li>
          );
        })}
      </ul>
      <p>{average}</p>
      <h4>Update Salary Section: </h4>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        type="number"
        value={salaryInput}
        onChange={(e) => setSalaryInput(e.target.value)}
      />
      <button
        onClick={() => {
          updateEmployee(nameInput, salaryInput);
          setNameInput("");
          setSalaryInput(0);
        }}
      >
        Update Employee
      </button>
    </>
  );
};
export default EmployeeSalary;
