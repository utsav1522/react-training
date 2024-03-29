import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Counter,
  PersonForm,
  ToDoList,
  RandomNumberGenerator,
  CounterWithStep,
  Clock,
  Notification,
} from "./Assignment-2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Counter />
    <hr />
    <PersonForm />
    <hr />
    <ToDoList />
    <hr />
    <RandomNumberGenerator />
    <hr />
    <CounterWithStep />
    <hr />
    <Clock />
    <hr />
    <Notification />
    <hr />
  </>
);
