import Question1 from "./components/Question-1";
import FormComponenet from "./components/Question-10/FormComponent";
import Form from "./components/Question-2";
import Question3 from "./components/Question-3";
import IndexPage from "./components/Question-4";
import Dropdown from "./components/Question-5";
import TodoList from "./components/Question-6";
import SearchFeild from "./components/Question-7";
import TempConverter from "./components/Question-8/tempConverter";
import MiniDrawer from "./components/Question-9";

const Assignment4 = () => {
  return (
    <div
      style={{
        color: "black",
        marginTop: "80px",
        marginLeft: "80px",
      }}
    >
      <h1
        style={{
          padding: "10px",
        }}
      >
        Assignment - 4
      </h1>
      <Question1 />
      <hr />
      <Form />
      <hr />
      <Question3 />
      <hr />
      <IndexPage />
      <hr />
      <Dropdown />
      <hr />
      <TodoList />
      <hr />
      <SearchFeild />
      <hr />
      <TempConverter />
      <hr />
      <MiniDrawer />
      <hr />
      <FormComponenet />
      <hr />
    </div>
  );
};

export default Assignment4;
