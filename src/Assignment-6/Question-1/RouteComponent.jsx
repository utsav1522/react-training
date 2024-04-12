import React, { Suspense } from "react";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("./Home"));
const SignIn = lazy(() => import("./SignIn"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
function RouteComponent() {
  return (
    <div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default RouteComponent;
