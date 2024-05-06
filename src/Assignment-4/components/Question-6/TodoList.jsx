/**
 * Build a simple todo list component with a text input
 * for adding new tasks and a list to display them.
 * Use controlled components to handle the input and update the list of tasks.
 */

import { useCallback, useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");
  const printTodo = useCallback(() => {
    return todoList.map((ele, index) => {
      return <li key={index + 10293}>{ele}</li>;
    });
  }, [todoList]);

  return (
    <>
      <h1>Question 6 - To Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodoList([...todoList, input]);
          setInput("");
        }}
      >
        Add Task to List
      </button>

      {todoList.length > 0 ? (
        <ul>{printTodo()}</ul>
      ) : (
        <h4>No Tasks to display.</h4>
      )}
    </>
  );
};
export default TodoList;
