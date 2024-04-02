/**
 * 
 * a component that displays a list of tasks.
Each task has a "Complete" button.
Implement a feature where clicking the "Complete" button marks the task as completed.
Use the useCallback hook to create dynamic callback functions for each task.
Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.


 */

import { useCallback, useState } from "react";

const Tasks = () => {
  const [tasksList, setTasksList] = useState([]);
  const [input, setInput] = useState("");

  const completeTask = useCallback(
    (key) => {
      const newTasksList = tasksList.filter((ele) => {
        return ele.id !== key;
      });
      console.log("rendering task with id" + key);
      setTasksList(newTasksList);
    },
    [tasksList]
  );

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          setTasksList([
            ...tasksList,
            { id: new Date().toLocaleString(), task: input },
          ]);
          setInput("");
        }}
      >
        Add Task to List
      </button>

      {tasksList.length > 0 ? (
        tasksList.map((ele) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p>{ele.task}</p>
              <button
                onClick={() => {
                  completeTask(ele.id);
                }}
              >
                Complete Task
              </button>
            </div>
          );
        })
      ) : (
        <h4>No Task to Display (-_-!)</h4>
      )}
    </>
  );
};
export default Tasks;
