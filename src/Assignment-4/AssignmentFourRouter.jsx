import { Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";

const Question1 = lazy(() => import("./components/Question-1"));
const Form = lazy(() => import("./components/Question-2"));
const Question3 = lazy(() => import("./components/Question-3"));
const Dropdown = lazy(() => import("./components/Question-5"));
const TodoList = lazy(() => import("./components/Question-6"));
const SearchFeild = lazy(() => import("./components/Question-7"));
const TempConverter = lazy(() =>
  import("./components/Question-8/tempConverter")
);
const FormComponenet = lazy(() =>
  import("./components/Question-10/FormComponent")
);
const MuiModal = lazy(() => import("./components/Question-11"));
const DataTable = lazy(() => import("./components/Question-12"));
const Home = lazy(() => import("./components/Question-4/Home"));
const SignUp = lazy(() => import("./components/Question-4/Singup"));
const Dashboard = lazy(() => import("./components/Question-4/Dashboard"));
const Error = lazy(() => import("./components/Question-4/Error"));
const OutletComponent = lazy(() =>
  import("./components/Question-4/OutletComponent")
);
const Contact = lazy(() => import("./components/Question-9/Contact"));
const Innovations = lazy(() => import("./components/Question-9/Innovations"));
const Settings = lazy(() => import("./components/Question-9/Settings"));
const OutletNine = lazy(() => import("./components/Question-9/OutletNine"));
const FormComponentFormik = lazy(() => import("./components/Question-13"));
const FormikForm = lazy(() => import("./components/Question-14"));

const AssignmentFourRouter = () => {
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
  ];

  const onChangeHandler = (event) => {
    navigate(`${event.target.value}`);
  };

  return (
    <>
      <div
        className="nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          margin: "10px",
        }}
      >
        <h1
          style={{
            padding: "10px",
          }}
        >
          Assignment - 4
        </h1>

        <select
          onChange={onChangeHandler}
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "50px",
            paddingRight: "50p",
            borderRadius: "10px",
          }}
        >
          <option>Select Question in Assignment-4</option>
          {options.map((ele, index) => {
            return <option key={index}>{ele}</option>;
          })}
        </select>
      </div>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="question-1" element={<Question1 />} />
          <Route path="question-2" element={<Form />} />
          <Route path="question-3" element={<Question3 />} />
          <Route path="question-4/*" element={<OutletComponent />}>
            <Route path="" element={<Home />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="question-5" element={<Dropdown />} />
          <Route path="question-6" element={<TodoList />} />
          <Route path="question-7" element={<SearchFeild />} />
          <Route path="question-8" element={<TempConverter />} />
          <Route path="question-9" element={<OutletNine />}>
            <Route path="" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="innovations" element={<Innovations />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="question-10" element={<FormComponenet />} />
          <Route path="question-11" element={<MuiModal />} />
          <Route path="question-12" element={<DataTable />} />
          <Route path="question-13" element={<FormComponentFormik />} />
          <Route path="question-14" element={<FormikForm />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default AssignmentFourRouter;
