import { useState, useContext } from "react";
import TodoButton from "./TodoButton";
import { todoDispatchContext } from "./../context/todo";

function TodoAdd() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useContext(todoDispatchContext);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch({
          type: "TODO_SUBMIT",
          text: inputValue,
        });
        setInputValue("");
      }}
    >
      <div className="input-group">
        <input
          type="text"
          placeholder="Ajouter une tâche"
          className="form-control"
          value={inputValue}
          onInput={handleInput}
        />
        <TodoButton
          label="Ajouter"
          type="submit"
          className="input-group-text btn-primary"
        />
      </div>
    </form>
  );
}

export default TodoAdd;
