import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
const Counter = lazy(() => import("./components/Question1"));
const PersonForm = lazy(() => import("./components/Question2"));
const ToDoList = lazy(() => import("./components/Question3"));
const RandomNumberGenerator = lazy(() => import("./components/Question4"));
const CounterWithStep = lazy(() => import("./components/Question5"));
const Clock = lazy(() => import("./components/Question6"));
const Notification = lazy(() => import("./components/Question7"));
const SlideShow = lazy(() => import("./components/Question8"));
const ThemeChanger = lazy(() => import("./components/Question9"));
const LanguageTranslate = lazy(() => import("./components/Question10"));
const ShoppingCart = lazy(() => import("./components/Question11"));
const Vote = lazy(() => import("./components//Question12"));
const Parent = lazy(() => import("./components//Question13"));
const Tasks = lazy(() => import("./components/Question14"));
const StudentsList = lazy(() => import("./components/Question15"));
const EmployeeSalary = lazy(() => import("./components/Question16"));
const Clipboard = lazy(() => import("./components/Question17"));
const LocalStorageAccess = lazy(() => import("./components/Question18"));
const Timer = lazy(() => import("./components/Question19"));

const AssignmentTwoRouter = () => {
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
    "question-17",
    "question-18",
    "question-19",
  ];
  const onChangeHandler = (event) => {
    navigate(`${event.target.value}`);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <h1>Assignment - 2</h1>
        <select
          onChange={onChangeHandler}
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "50px",
            paddingLeft: "50px",
            borderRadius: "10px",
          }}
        >
          <option>Select a Question in Assignment 2</option>
          {options.map((ele, index) => {
            return <option key={index}> {ele} </option>;
          })}
        </select>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route index path="question-1" element={<Counter />} />
          <Route path="question-2" element={<PersonForm />} />
          <Route path="question-3" element={<ToDoList />} />
          <Route path="question-4" element={<RandomNumberGenerator />} />
          <Route path="question-5" element={<CounterWithStep />} />
          <Route path="question-6" element={<Clock />} />
          <Route path="question-7" element={<Notification />} />
          <Route path="question-8" element={<SlideShow />} />
          <Route path="question-9" element={<ThemeChanger />} />
          <Route path="question-10" element={<LanguageTranslate />} />
          <Route path="question-11" element={<ShoppingCart />} />
          <Route path="question-12" element={<Vote />} />
          <Route path="question-13" element={<Parent />} />
          <Route path="question-14" element={<Tasks />} />
          <Route path="question-15" element={<StudentsList />} />
          <Route path="question-16" element={<EmployeeSalary />} />
          <Route path="question-17" element={<Clipboard />} />
          <Route path="question-18" element={<LocalStorageAccess />} />
          <Route path="question-19" element={<Timer />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AssignmentTwoRouter;
