/**
 * a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.

 */

import React from "react";
import ListItem from "./ListItem";

const TaskList = ({ taskList }) => {
  return (
    <>
      <h1>Task List</h1>
      {taskList.map((element, index) => {
        return <ListItem item={element} key={index} />;
      })}
    </>
  );
};
export default TaskList;
