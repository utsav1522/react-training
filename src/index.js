import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Assignment2 from "./Assignment-2";
import Assignment1 from "./Assignment-1";
import Assignment6 from "./Assignment-6";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
