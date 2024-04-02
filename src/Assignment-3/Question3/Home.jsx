import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <h2>This is the Home Page </h2>
      <button onClick={() => handleButtonClick()}>Click for About Page</button>
    </div>
  );
}

export default Home;
