import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Greeting from "./components/Question1";
import UserCard from "./components/Question2";
import Weather from "./components/Question3";
import Counter from "./components/Question4";
import TaskList from "./components/Question5";
import Button from "./components/Question6";
import { data, tasks } from "./mock.js";
import "./index.css";
const AssignmentOneRouter = () => {
  return (
    <div>
      <h1>Assignment - 1</h1>
      <div className="nav">
        <Link
          to={"/assignment-1"}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Question - 1
        </Link>
        <Link
          to={"question-2"}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Question - 2
        </Link>{" "}
        <Link
          to={"question-4"}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Question - 4
        </Link>{" "}
        <Link
          to={"question-3"}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Question - 3
        </Link>{" "}
        <Link
          to={"question-5"}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Question - 5
        </Link>{" "}
        <Link
          to={"question-6"}
          style={{
            color: "white",
            textDecoration: "none",
            backgroundColor: "green",
            padding: "10px",
          }}
        >
          Question - 6
        </Link>{" "}
      </div>

      <hr />

      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="question-2" element={<UserCard data={data} />} />
        <Route path="question-3" element={<Weather temperature={16} />} />
        <Route path="question-4" element={<Counter />} />
        <Route path="question-5" element={<TaskList taskList={tasks} />} />
        <Route
          path="question-6"
          element={
            <Button Text={"Passing text from index.js"} Color={"blue"} />
          }
        />
      </Routes>
    </div>
  );
};

export default AssignmentOneRouter;
