import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
// let [selectedCategory, setSelectedCategory] = useState("All")

  const selectedButton = (e) => {
    setSelectedCategory(e.target.name)
  }
  const categoryButtons = categories.map(cat => (
    <button key={cat} className={cat === selectedCategory ? "selected" : ""} onClick={selectedButton} name={cat}>
      {cat}
    </button>
  ))
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
