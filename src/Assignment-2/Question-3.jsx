/**
 * 
 * 
 * a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not).
 */

import { useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  let [input, setInput] = useState();

  const deleteItems = (key) => {
    const newarray = todos.filter((ele) => {
      return key !== ele.id;
    });
    setTodos(newarray);
    console.log(newarray);
    console.log(todos);
  };
  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task ...."
      />

      {input !== "" ? (
        <button
          onClick={() => {
            setTodos([...todos, { id: new Date().toString(36), task: input }]);
            setInput("");
          }}
        >
          Add Task
        </button>
      ) : (
        <button>Add Task</button>
      )}

      {todos.length === 0 ? (
        <h3>No Tasks -_-</h3>
      ) : (
        todos.map((element) => {
          return (
            <div
              style={{
                display: "flex",
                padding: "10px",
              }}
            >
              <p>{element["task"].toString()}</p>
              <button
                onClick={() => {
                  deleteItems(element.id);
                }}
                style={{
                  padding: "10px",
                  marginLeft: "20px",
                }}
              >
                X
              </button>
            </div>
          );
        })
      )}
    </>
  );
};

export default ToDoList;
