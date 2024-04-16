/*

14.Create an HOC named withAuth that restricts access to a specific component to authenticated users only.
Implement this HOC on a sample component and demonstrate how it protects routes.

*/

import { useContext } from "react";
import { UserAuthContext } from "./AuthContextProvider";
import Login from "./Login";

const WithAuth = (Home) => {
  const { login } = useContext(UserAuthContext);

  if (login) {
    return <Home name="Munendra" />;
  }

  return <>{!login && <Login />}</>;
};

export default WithAuth;
