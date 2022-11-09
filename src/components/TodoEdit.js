import { useState } from "react";
import TodoButton from "./TodoButton";

function TodoEdit({ item, editSubmitHandler, editHandler }) {
  const [inputValue, setInputValue] = useState(item.content);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      editHandler(item.id);
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        editSubmitHandler(item.id, inputValue);
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
