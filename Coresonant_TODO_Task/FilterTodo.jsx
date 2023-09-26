import React from "react";

function FilterTodo({ filter, setFilter }) {
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="filter-todo">
        <span style={{fontWeight:'bold'}}>Filter By :</span>
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => handleFilterChange("all")}
        style={{marginLeft:5,color:'white',backgroundColor:'blue'}}
      >
        All
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => handleFilterChange("completed")}
        style={{marginLeft:5,color:'white',backgroundColor:'green'}}
      >
        Completed
      </button>
      <button
        className={filter === "notCompleted" ? "active" : ""}
        onClick={() => handleFilterChange("notCompleted")}
        style={{marginLeft:5,color:'white',backgroundColor:'red'}}
      >
        Not Completed
      </button>
    </div>
  );
}

export default FilterTodo;
