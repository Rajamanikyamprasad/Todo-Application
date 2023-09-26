import React, { useState } from "react";

function AddTodo({ todos, setTodos }) {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddClick = () => {
    // Check if the task name is not empty
    if (newTask.trim() !== "") {
      // Create a new task object
      const newTodo = {
        id: todos.length + 1, // Assign a unique ID (in a real app, use a more robust ID generation)
        title: newTask,
        completed: false,
      };

      // Update the state with the new task
      setTodos([...todos, newTodo]);

      // Clear the input field
      setNewTask("");
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleInputChange}
        id="input"
      />
      <button onClick={handleAddClick} className="add">Add</button>
    </div>
  );
}

export default AddTodo;
