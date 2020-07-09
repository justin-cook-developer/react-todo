import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const CreateTodoForm = ({ addTodo }) => {
  const history = useHistory();
  const location = useLocation();

  console.log("History", history);
  console.log("Location", location);

  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);

  const clearForm = () => {
    setText("");
    setStatus(false);
  };

  return (
    <section className="section">
      <form
        className="center"
        style={{
          width: "50%",
        }}
        onSubmit={(event) => {
          event.preventDefault();

          addTodo(text, status);
          clearForm();

          history.push("/");
        }}
      >
        <div className="field">
          <label className="label">Text (no # signs allowed)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Text input"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
          </div>
        </div>

        {text.includes("#") && <p className="help is-danger">No # signs!!!</p>}

        <div className="field">
          <label className="label">Completed</label>
          <div className="control">
            <div className="select">
              <select
                value={status.toString()}
                onChange={(event) => {
                  setStatus(event.target.value);
                }}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button
              className="button is-link is-light"
              onClick={() => {
                clearForm();
                history.push("/");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CreateTodoForm;
