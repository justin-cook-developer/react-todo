import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import Header from "./Header";
import TodoTable from "./Table";
import CreateTodoForm from "./CreateTodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      text: "clean room",
      status: false,
    },
    {
      id: uuidv4(),
      text: "make our data model",
      status: true,
    },
  ]);

  const addTodo = (text, status) => {
    const todo = {
      id: uuidv4(),
      text,
      status,
    };

    const spreadArr = [...todos];

    console.log("current todos in new array", spreadArr);
    console.log("is different array", todos === spreadArr);

    setTodos([todo, ...todos]);
  };

  const removeTodo = (todo) => {
    setTodos(
      todos.filter((_todo) => {
        return todo.id !== _todo.id;
      })
    );
  };

  return (
    <div className="">
      <Header />
      <CreateTodoForm addTodo={addTodo} />
      <TodoTable todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
