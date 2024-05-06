import { useEffect } from "react";

const withLogging = (Component) => {
  const WithLogging = (props) => {
    useEffect(() => {
      console.log("mounting");
      return () => {
        console.log("Unmounting");
      };
    });
    useEffect(() => {
      console.log("updating............");
    });
    return <Component {...props} />;
  };
  return WithLogging;
};
export default withLogging;
