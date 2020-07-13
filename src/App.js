import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import "./App.css";

import { getTodos, createTodo, deleteTodo } from "./api";
import { useQuery } from "./hooks";
import Header from "./Header";
import TodoTable from "./Table";
import CreateTodoForm from "./CreateTodoForm";
import Search from "./Search"

function App() {
  const [todos, setTodos] = useState([]);
  const queryParams = useQuery();

  const searchTerm = queryParams.search && queryParams.search.length
    ? queryParams.search : "";

  useEffect(() => {
    getTodos(searchTerm)
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Failed to fetch initial todos", error.toString());
      });
  }, [searchTerm]);

  const addTodo = async (title, completed = false) => {
    if (!title) {
      return;
    }

    try {
      const todo = await createTodo(title, completed);
      setTodos([todo, ...todos]);
    } catch (error) {
      console.error("Failed to create todo", error.toString());
    }
  };

  const removeTodo = async (todo) => {
    if (!todo || !todo.id || !("completed" in todo)) return;

    try {
      const deletedTodo = await deleteTodo(todo.id);

      if (deletedTodo) {
        setTodos(
          todos.filter((_todo) => {
            return todo.id !== _todo.id;
          })
        );
      }
    } catch (error) {
      console.error("Failed to delete todo", error.toString());
    }
  };

  return (
    <div className="">
      <Header />

      <Route
        path="/"
        exact={true}
        render={() => (
          <section className="section center">
            <Link className="button is-small is-primary center" to="/create">
              Create a Todo
            </Link>
          </section>
        )}
      />

      <Route
        path="/create"
        exact={true}
        render={() => <CreateTodoForm addTodo={addTodo} />}
      />

      <Route
        path="/"
        exact={true}
        component={Search}
      />

      <Route
        path="/"
        render={() => (
            <TodoTable todos={todos} removeTodo={removeTodo} />
        )}
      />
    </div>
  );
}

export default App;
