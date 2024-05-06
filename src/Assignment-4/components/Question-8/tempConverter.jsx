/**
 * Create a temperature converter component with two input fields:
 * one for Celsius and one for Fahrenheit.
 * Implement controlled components for both inputs.
 * When the user enters a value in one input,
 * the other input should update with the converted temperature.
 */

import { useEffect, useState } from "react";

const TempConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [convertToCelsius, setConvertToCelsius] = useState(true);

  // useEffect(() => {
  //   if (convertToCelsius === false) {
  //     let ans = convertCelsiusToFahrenheit(celsius);
  //     setFahrenheit(Number(ans));
  //   }
  // }, [celsius, convertToCelsius]);

  // useEffect(() => {
  //   if (convertToCelsius === true) {
  //     let ans = convertFahrenheitToCelsius(fahrenheit);
  //     setFahrenheit(Number(ans));
  //   }
  // }, [fahrenheit, convertToCelsius]);

  const convertCelsiusToFahrenheit = (celsius) => {
    return Number(celsius) * (9 / 5) + 32;
  };

  const convertFahrenheitToCelsius = (fahrenheit) => {
    return (Number(fahrenheit) - 32) * (5 / 9);
  };
  return (
    <>
      <h1>Question 8 - Temperature Converter</h1>
      <input
        disabled={convertToCelsius === true}
        type="number"
        step="any"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Temperature in Degree celsius"
      />

      {convertToCelsius === true ? (
        <button
          onClick={() => {
            let ans = convertCelsiusToFahrenheit(celsius);
            setCelsius(Number(ans));
          }}
          onDoubleClick={() => {
            setConvertToCelsius(!convertToCelsius);
          }}
        >
          {"<-"} Convert To Celcius
        </button>
      ) : (
        <button
          onClick={() => {
            let ans = convertFahrenheitToCelsius(fahrenheit);
            setFahrenheit(ans);
          }}
          onDoubleClick={() => {
            setConvertToCelsius(!convertToCelsius);
          }}
        >
          Convert to Fahrenheit {"->"}
        </button>
      )}
      <input
        disabled={convertToCelsius === false}
        type="number"
        step="any"
        value={fahrenheit}
        onChange={(e) => setFahrenheit(e.target.value)}
        placeholder="Temperature in Degree Fahrenheit"
      />
    </>
  );
};

export default TempConverter;
