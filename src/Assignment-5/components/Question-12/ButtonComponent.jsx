/**
 * Create a reusable Button component in React that accepts props for different styles (e.g., primary, secondary, danger) and click handlers.
 * Demonstrate how to use this component in a sample application.
 */

const ButtonComponent = (props) => {
  const { color, buttonName, onClick, style } = props;
  return (
    <>
      <button
        style={{
          ...style,
          backgroundColor: color,
          color: "white",
        }}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </>
  );
};
export default ButtonComponent;
