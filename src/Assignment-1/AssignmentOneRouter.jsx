import React, { Suspense, lazy } from "react";
import "./index.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { data, tasks } from "./mock.js";
const Greeting = lazy(() => import("./components/Question1"));
const UserCard = lazy(() => import("./components/Question2"));
const Weather = lazy(() => import("./components/Question3"));
const TaskList = lazy(() => import("./components/Question5"));
const Counter = lazy(() => import("./components/Question4"));
const Button = lazy(() => import("./components/Question6"));
const AssignmentOneRouter = () => {
  const options = [
    "question-1",
    "question-2",
    "question-3",
    "question-4",
    "question-5",
    "question-6",
  ];
  const navigate = useNavigate();
  const onChangeHandler = (event) => {
    navigate(`${event.target.value}`);
  };
  return (
    <div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Assignment - 1</h1>
        <select onChange={onChangeHandler} style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "10px"
        }}>
          <option>Select a Question in Assignment 1</option>
          {options.map((ele, index) => {
            return <option key={index}>{ele}</option>;
          })}
        </select>
      </div>

      <Suspense fallback={<h1>Loading ....</h1>}>
        <Routes>
          <Route path="question-1" element={<Greeting />} />
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
      </Suspense>
    </div>
  );
};

export default AssignmentOneRouter;
