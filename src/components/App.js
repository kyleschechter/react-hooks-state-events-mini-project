import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  let [tasks, setTasks] = useState(TASKS)
  let [selectedCategory, setSelectedCategory] = useState("All")
  
  const handleNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const listOfTasks = tasks.filter(task => {
    if (selectedCategory === "All") return true
    return task.category === selectedCategory
  })


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={handleNewTask}
      />
      <TaskList 
      tasks={listOfTasks}
      setTasks={setTasks}
      />
    </div>
  );
}

export default App;
