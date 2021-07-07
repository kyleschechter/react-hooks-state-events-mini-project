import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("Code")


  function handleTextChange(e) {
    setText(e.target.value)
  }

  function handleCategory(e){
    setCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {text: text, category: category}
    onTaskFormSubmit(formData)
    setText("")
    setCategory("Code")
  }
  
  const categoryOptions = categories
    .filter(cat => cat !== "All")
    .map(cat => <option key={cat}>{cat}</option>)

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
