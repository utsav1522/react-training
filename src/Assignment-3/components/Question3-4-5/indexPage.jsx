/**
 * 
 * creat pages: Home and About.
Implement routing using React Router DOM.
Create navigation links to switch between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes.


 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import UnauthenticatedPage from "./UnauthenticatedPage";
import { createContext, useState } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import Settings from "./Settings/Settings";
import Innovations from "./Innovations/Innovations";
import QuickLinks from "./QuickLinks/QuickLinks";
export const LoginContext = createContext();
const IndexPage = () => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider
      value={{ loginStatus: isLoggedin, setLoginStatus: setIsLoggedIn }}
    >
      <BrowserRouter>
        <Routes>
          localStorage.setItem("isAuthneticated", isLoggedin)
          <Route path="/" element={<Home />} />
          {localStorage.getItem("isAuthneticated") === "true" ? (
            <>
              <Route path="about" element={<About />} />
              <Route path="dashboard" element={<Dashboard />}>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="innovations" element={<Innovations />} />
                <Route path="quick-links" element={<QuickLinks />} />
              </Route>
            </>
          ) : (
            <></>
          )}
          <Route path="*" element={<Error />} />
          <Route path="login-failed" element={<UnauthenticatedPage />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
};
export default IndexPage;
