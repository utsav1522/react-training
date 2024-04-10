const Child = ({ countValue, handleIncrementClick, handleResetClick }) => {
  return (
    <>
      <h4>{countValue}</h4>
      <button
        onClick={() => {
          handleIncrementClick();
        }}
      >
        Increment Count
      </button>
      <button onClick={() => handleResetClick()}>Reset Count</button>
    </>
  );
};

export default Child;
