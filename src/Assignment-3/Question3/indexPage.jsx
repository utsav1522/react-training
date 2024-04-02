/**
 * 
 * creat pages: Home and About.
Implement routing using React Router DOM.
Create navigation links to switch between the Home and About pages.
Display appropriate content on each page.
Add a "404 Not Found" page for any invalid routes.


 */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";

const IndexPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default IndexPage;
