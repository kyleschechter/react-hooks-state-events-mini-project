import React from "react";
import Task from "./Task"

function TaskList({ tasks, setTasks }) {
 
  const listOfTasks = tasks.map(task => {
      return (
        <Task 
        key={task.text}
        text={task.text}
        category={task.category}
        tasks={tasks}
        setTasks={setTasks}
        />
      )
  })
  return (
    <div className="tasks">
      {listOfTasks}
    </div>
  );
}

export default TaskList;
