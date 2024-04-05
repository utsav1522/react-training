/**
 * 
 * 
 *  a custom hook named useLocalStorage to interact with local storage.
Create a useLocalStorage hook that allows storing and retrieving data from local storage.
Implement methods for setting, getting, and removing data using the hook.
Utilize the localStorage API within the hook to manage data.
Develop a component that uses the useLocalStorage hook to manage user preferences.
 */

import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const LocalStorageAccess = () => {
  const { setItems, getItems, deleteKey, deleteAll } = useLocalStorage();
  const [inputSetKey, setInputSetKey] = useState("");
  const [inputSetValue, setInputSetValue] = useState("");
  const [getKey, setGetKey] = useState("");
  const [values, setValues] = useState("");
  const [deletionKey, setDeletionKey] = useState("");
  return (
    <>
      <input
        placeholder="Enter the key ..."
        value={inputSetKey}
        onChange={(e) => setInputSetKey(e.target.value)}
      />
      <input
        placeholder="Enter the value ..."
        value={inputSetValue}
        onChange={(e) => setInputSetValue(e.target.value)}
      />
      <button
        onClick={() => {
          setItems(inputSetKey, inputSetValue);
          setInputSetKey("");
          setInputSetValue("");
        }}
      >
        Add Value to Local Storage:
      </button>
      <br />
      <input
        placeholder="Enter the key ..."
        value={getKey}
        onChange={(e) => setGetKey(e.target.value)}
      />
      <button
        onClick={() => {
          setValues(getItems(getKey));
          setGetKey("");
        }}
      >
        Get Value from Local Storage:
      </button>
      {values !== "" && values !== undefined ? (
        <div>
          <p>The returned value is : {values}</p>
        </div>
      ) : values === undefined ? (
        <p>No Such key found</p>
      ) : (
        <></>
      )}
      <br />

      <input
        placeholder="Enter the key ..."
        value={deletionKey}
        onChange={(e) => setDeletionKey(e.target.value)}
      />
      <button
        onClick={() => {
          deleteKey(deletionKey);
          setDeletionKey("");
        }}
      >
        Delete Key:
      </button>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
        }}
        onClick={() => deleteAll()}
      >
        Delete All Keys{" "}
      </button>
    </>
  );
};

export default LocalStorageAccess;
