/**  16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
 Define an array of employee objects, where each object has a name and salary property.
 Use the useMemo hook to calculate the average salary of employees.
 Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
 Render the average salary on the screen.
 Include a button that, when clicked, updates the employee data with new salaries.
*/

import React, { useState, useMemo } from "react";

const emp = [
  {
    name: "abc",
    salary: 250000000,
  },
  {
    name: "def",
    salary: 210000000,
  },
  {
    name: "ghi",
    salary: 25000,
  },
];

const EmployeeSalary = () => {
  const [employee, setEmployee] = useState(emp);
  const avgSalary = useMemo(() => {
    let length = emp.length;
    const sum = emp.reduce((acc, curr) => {
      acc = acc + curr.salary;
      return acc;
    }, 0);
    console.log(sum);
    return (sum / length).toFixed(2);
  }, [employee]);

  return <div>{avgSalary}</div>;
};

export default EmployeeSalary;
