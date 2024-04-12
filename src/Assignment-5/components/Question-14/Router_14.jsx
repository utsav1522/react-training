import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedComponent from "./ProtectedComponent";
import Login from "./Login";
import BaseComponent from "./BaseComponent";
import withAuth from "./withAuth";

const Routers_14 = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedComponent />}>
        <Route path="page" element={<BaseComponent />} />
      </Route>
    </Routes>
  );
};

export default Routers_14;
