import { useState } from "react";

function TodoAdd({ submitHandler }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitHandler(inputValue);
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
        <button type="submit" className="input-group-text btn btn-primary">
          Ajouter
        </button>
      </div>
    </form>
  );
}

export default TodoAdd;
