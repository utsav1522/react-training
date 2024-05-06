import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./components/Question-4";
import IndexFive from "./components/Question-5";
import IndexOne from "./components/Question-1";
import Modal from "./components/Question-6";
const Assignment6 = () => {
  return (
    <ErrorBoundary fallback={<h1>Error Loading Page</h1>}>
      <BrowserRouter>
        {/* <IndexOne /> */}
        {/* <Counter /> */}
        {/* <LoginForm /> */}
        {/* <IndexFive/>  */}
        <Modal />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default Assignment6;
