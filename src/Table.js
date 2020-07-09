import React from "react";

const Table = (props) => {
  console.log("props", props);

  return (
    <section className="section">
      <table className="table center">
        <thead>
          <tr>
            <th>Text</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
                <td>
                  <button
                    className="button is-small is-danger"
                    onClick={() => {
                      props.removeTodo(todo);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
