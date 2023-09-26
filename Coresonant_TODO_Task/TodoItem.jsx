import React, { useState } from "react";

function TodoItem({ id, title, completed, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleToggleComplete = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedTitle.trim() !== "") {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, title: editedTitle } : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
    }
  };

  const handleDeleteClick = () => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <li className={`todo-item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggleComplete}
        style={{backgroundColor:'green',color:'white'}}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSaveClick}
          autoFocus
        />
      ) : (
        <span className="task-title">{title}</span>
      )}
      <div className="action-buttons">
        {isEditing ? (
          <button onClick={handleSaveClick} style={{backgroundColor:'green',color:'white'}}>Save</button>
        ) : (
          <button onClick={handleEditClick} style={{backgroundColor:'blue',color:'white'}}>Edit</button>
        )}
        <button onClick={handleDeleteClick} style={{backgroundColor:'red',color:'white', marginLeft:5}}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
