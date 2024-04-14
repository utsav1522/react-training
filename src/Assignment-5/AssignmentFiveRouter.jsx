import { Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const FetchDataOne = lazy(() => import("./components/Question-1"));
const FetchDataTwo = lazy(() => import("./components/Question-2"));
const FetchDataThree = lazy(() => import("./components/Question-3"));
const FetchDataFour = lazy(() => import("./components/Question-4"));
const FetchDataFive = lazy(() => import("./components/Question-5-6"));
const FetchDataSix = lazy(() => import("./components/Question-8"));
const FetchDataSeven = lazy(() => import("./components/Question-7"));
const IndxQuestionEight = lazy(() => import("./components/Question-8"));
const IndexNine = lazy(() => import("./components/Question-9"));
const IndexEleven = lazy(() => import("./components/Question-11"));
const Home = lazy(() => import("./components/Question-12"));
const HomeThirteen = lazy(() => import("./components/Question-13"));
const OriginalComponent = lazy(() => import("./components/Question-15"));
const Component = lazy(() => import("./components/Question-16"));
const ProtectedComponent = lazy(() => import("./components/Question-14"));

const AssignmentFiveRouter = () => {
  const navigate = useNavigate();
  const options = [
    "question-1",
    "question-2",
    "question-3",
    "question-4",
    "question-5",
    "question-6",
    "question-7",
    "question-8",
    "question-9",
    "question-10",
    "question-11",
    "question-12",
    "question-13",
    "question-14",
    "question-15",
    "question-16",
  ];
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
        <h1>Assignment - 5</h1>
        <select onChange={onChangeHandler} style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "50px",
          paddingRight: "50px",
          borderRadius: "10px"
        }}>
          <option>Select Question in Assignment - 5</option>
          {options.map((ele, index) => {
            return <option key={index}>{ele}</option>;
          })}
        </select>
      </div>

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="question-1" element={<FetchDataOne />} />
          <Route path="question-2" element={<FetchDataTwo />} />
          <Route path="question-3" element={<FetchDataThree />} />
          <Route path="question-4" element={<FetchDataFour />} />
          <Route path="question-5" element={<FetchDataFive />} />
          <Route path="question-6" element={<FetchDataSix />} />
          <Route path="question-7" element={<FetchDataSeven />} />
          <Route path="question-8" element={<IndxQuestionEight />} />
          <Route path="question-9" element={<IndexNine />} />
          <Route path="question-11" element={<IndexEleven />} />
          <Route path="question-12" element={<Home />} />
          <Route path="question-13" element={<HomeThirteen />} />
          <Route path="question-14" element={<ProtectedComponent />} />
          <Route path="question-15" element={<OriginalComponent />} />
          <Route path="question-16" element={<Component />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default AssignmentFiveRouter;
