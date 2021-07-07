import React from "react";

function Task({ text, category, tasks, setTasks }) {
 const deleteTask = () => {
   setTasks(tasks.filter(task => task.text !== text))
 }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteTask} className="delete">X</button>
    </div>
  );
}

export default Task;
