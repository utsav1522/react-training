import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
const IndexPage = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default IndexPage;
