import React from "react";
import ButtonComponent from "./ButtonComponent";
const Home = () => {
  const onCLickHandlerPrimary = () => {
    console.log("Primary Clicked");
  };
  const onCLickHandlerSecondary = () => {
    console.log("Primary Clicked");
  };
  const style = {
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
  };
  return (
    <div>
      <h1>Question - 12</h1>
      <ButtonComponent
        color="red"
        buttonName="Primary"
        onClick={onCLickHandlerPrimary}
        style={style}
      />
      <ButtonComponent
        color="blue"
        buttonName="Secondary"
        onClick={onCLickHandlerSecondary}
        style={style}
      />
    </div>
  );
};

export default Home;
