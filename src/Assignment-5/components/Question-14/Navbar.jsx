import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserAuthContext } from "./AuthContextProvider";
const Navbar = () => {
  const navigate = useNavigate();
  const { setLogin, login } = useContext(UserAuthContext);

  return (
    <nav>
      <Link
        to="/assignment5/question14"
        onClick={() => {
          setLogin(false);
          navigate("/assignment5/question14");
        }}
      >
        Login
      </Link>
      <Link
        to={login ? "/assignment5/question14/home" : "/assignment5/question14"}
      >
        Home
      </Link>
      {login && (
        <Link to="/assignment5/question14/" onClick={() => setLogin(false)}>
          Logout
        </Link>
      )}
    </nav>
  );
};
export default Navbar;
