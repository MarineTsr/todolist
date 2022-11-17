import { useState, useContext } from "react";
import TodoButton from "./TodoButton";
import { todoDispatchContext } from "./../context/todo";

function TodoEdit({ item }) {
  const [inputValue, setInputValue] = useState(item.content);
  const dispatch = useContext(todoDispatchContext);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch({
        type: "TODO_EDIT_MODE",
        id: item._id,
      });
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch({
          type: "TODO_EDIT_SUBMIT",
          id: item._id,
          text: inputValue,
        });
      }}
      onKeyDown={handleKeyDown}
    >
      <div className="input-group">
        <input
          type="text"
          autoFocus
          placeholder="Modifier la tâche"
          className="form-control"
          value={inputValue}
          onInput={handleInput}
        />
        <TodoButton
          label="Valider"
          type="submit"
          className="input-group-text btn-success"
        />
      </div>
    </form>
  );
}

export default TodoEdit;
