import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./components/Question-4";
const Assignment6 = () => {
  return (
    <ErrorBoundary fallback={<h1>Error Loading Page</h1>}>
      <BrowserRouter>
        {/* <IndexOne /> */}
        {/* <Counter /> */}
        <LoginForm />
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export default Assignment6;
