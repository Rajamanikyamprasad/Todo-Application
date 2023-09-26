import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";



function Todo(){
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
  
    useEffect(() => {
      // Fetch initial data and set it to todos state
      fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }, []);
  
    return (
      <div>
        <h1 id="header"> Coresonant Todo App</h1>
        <AddTodo todos={todos} setTodos={setTodos} />
        <FilterTodo filter={filter} setFilter={setFilter} />
        <TodoList todos={todos} setTodos={setTodos} filter={filter} />
      </div>
    );
}


export default Todo;