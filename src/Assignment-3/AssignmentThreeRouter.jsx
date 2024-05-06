import { Routes, Link, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import Parent from "./components/Question-1-2/Parent";
const IndexPage = lazy(() => import("./components/Question3-4-5/indexPage"));
const ListParent = lazy(() => import("./components/Question6"));

const AssignmentThreeRouter = () => {
  const options = ["question-1", "question-2", "question-3"];
  const navigate = useNavigate();
  const onChangeHandler = (event) => {
    navigate(`${event.target.value}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Assignment-3</h1>
        <select
          onChange={onChangeHandler}
          style={{
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingTop: "10px",
            paddingBottom: "10px",
            borderRadius: "10px",
            justifyContent: "center",
          }}
        >
          <option>Select QUestion in Assignment - 3</option>
          {options.map((ele, index) => {
            return <option key={index}>{ele}</option>;
          })}
        </select>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route index path="question-1/*" element={<Parent />} />
          <Route path="question-2/*" element={<IndexPage />} />
          <Route path="question-3/*" element={<ListParent />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default AssignmentThreeRouter;
