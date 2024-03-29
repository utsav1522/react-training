/**
 * 
 * a functional component named Weather that accepts a prop called temperature (a number).
Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
Import and render the Weather component in the App component with different temperature values.
 */

const Weather = (props) => {
  return (
    <>
      {props.temperature >= 25 ? (
        <div
          style={{
            display: "flex",
          }}
        >
          <h2>It's sunny today!</h2>
          <img
            src="https://c7.alamy.com/comp/2JKJ5C0/emoticon-with-glasses-isolated-on-white-background-vector-icon-2JKJ5C0.jpg"
            alt="img"
            style={{
              margin: "10px",
              height: "100px",
              width: "100px",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
          }}
        >
          <h2>It's cold today!</h2>
          <img
            src="https://c7.alamy.com/comp/EMC6YW/snowflake-head-heh-EMC6YW.jpg"
            alt="img"
            style={{
              margin: "10px",
              height: "100px",
              width: "100px",
            }}
          />
        </div>
      )}
    </>
  );
};

export default Weather;
