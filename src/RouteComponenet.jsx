import { Routes, Route } from "react-router-dom";
import Assignment1 from "./Assignment-1";
import Assignment4 from "./Assignment-4";
const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/assignment-1/*" element={<Assignment1 />} />
        {/* <Route path="/assignment-2/*" element={<Assignment-2 />} />
        <Route path="/assignment-3/*" element={<Assignment-3 />} /> */}
        <Route path="/assignment-4/*" element={<Assignment4 />} />
      </Routes>
    </>
  );
};
export default RouteComponent;
