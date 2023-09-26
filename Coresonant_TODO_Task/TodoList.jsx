import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, filter }) {
  // Filter the todos based on the current filter value (all, completed, or not completed)
  const filteredTodos = filter === "completed"
    ? todos.filter(todo => todo.completed)
    : filter === "notCompleted"
    ? todos.filter(todo => !todo.completed)
    : todos;

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
}

export default TodoList;
