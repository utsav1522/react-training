import Question1 from "./components/Question-1";
import Form from "./components/Question-2";
import Question3 from "./components/Question-3";
import Dropdown from "./components/Question-5";
import TodoList from "./components/Question-6";
import SearchFeild from "./components/Question-7";
import TempConverter from "./components/Question-8/tempConverter";
import FormComponenet from "./components/Question-10/FormComponent";
import MuiModal from "./components/Question-11";
import DataTable from "./components/Question-12";

import Home from "./components/Question-4/Home";
import SignUp from "./components/Question-4/Singup";
import Dashboard from "./components/Question-4/Dashboard";
import Error from "./components/Question-4/Error";
import { Routes, Route, Link } from "react-router-dom";
import OutletComponent from "./components/Question-4/OutletComponent";
import Contact from "./components/Question-9/Contact";
import Innovations from "./components/Question-9/Innovations";
import Settings from "./components/Question-9/Settings";
import OutletNine from "./components/Question-9/OutletNine";
import "./index.css";
import FormComponentFormik from "./components/Question-13";
import FormikForm from "./components/Question-14";

const AssignmentFourRouter = () => {
  return (
    <>
      <div
        className="nav"
        style={{
          flexWrap: "wrap",
        }}
      >
        <Link to={"/assignment-4"} className="navLinkStyle">
          Question - 1
        </Link>
        <Link to={"question-2"} className="navLinkStyle">
          Question - 2
        </Link>
        <Link to={"question-3"} className="navLinkStyle">
          Question - 3
        </Link>
        <Link to={"question-4"} className="navLinkStyle">
          Question - 4
        </Link>
        <Link to={"question-5"} className="navLinkStyle">
          Question - 5
        </Link>
        <Link to={"question-6"} className="navLinkStyle">
          Question - 6
        </Link>
        <Link to={"question-7"} className="navLinkStyle">
          Question - 7
        </Link>
        <Link to={"question-8"} className="navLinkStyle">
          Question - 8
        </Link>
        <Link to={"question-9"} className="navLinkStyle">
          Question - 9
        </Link>
        <Link to={"question-10"} className="navLinkStyle">
          Question - 10
        </Link>
        <Link to={"question-11"} className="navLinkStyle">
          Question - 11
        </Link>
        <Link to={"question-12"} className="navLinkStyle">
          Question - 12
        </Link>
        <Link to={"question-13"} className="navLinkStyle">
          Question - 13
        </Link>
        <Link to={"question-14"} className="navLinkStyle">
          Question - 14
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Question1 />} />
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
        <Route path="question-14" element={<FormikForm/>}/>
      </Routes>
    </>
  );
};
export default AssignmentFourRouter;
