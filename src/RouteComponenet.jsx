import { Routes, Route } from "react-router-dom";
import Assignment1 from "./Assignment-1";
import Assignment2 from "./Assignment-2";
import Assignment3 from "./Assignment-3";
import Assignment4 from "./Assignment-4";
const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/assignment-1/*" element={<Assignment1 />} />
        <Route path="/assignment-2/*" element={<Assignment2 />} />
        <Route path="/assignment-3/*" element={<Assignment3 />} />
        <Route path="/assignment-4/*" element={<Assignment4 />} />
      </Routes>
    </>
  );
};
export default RouteComponent;
