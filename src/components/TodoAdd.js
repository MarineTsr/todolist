import { useState, useContext } from "react";
import TodoButton from "./TodoButton";
import { todoDispatchContext } from "./../context/todo";

function TodoAdd() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useContext(todoDispatchContext);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputValue.length > 0) {
      try {
        setIsLoading(true);
        const response = await fetch("https://restapi.fr/api/MTtodos", {
          method: "POST",
          body: JSON.stringify({
            content: inputValue,
            done: false,
            edit: false,
          }),
          headers: {
            "Content-type": "application/json",
          },
        });

        if (response.ok) {
          dispatch({
            type: "TODO_ADD",
            todo: await response.json(),
          });

          setInputValue("");
        } else {
          setError("Une erreur est survenue.");
        }
      } catch (e) {
        setError("Une erreur est survenue.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {isLoading && <p className="form-text mt-3 mb-0">Chargement...</p>}
      {error && <p className="d-block invalid-feedback mt-3 mb-0">{error}</p>}
    </form>
  );
}

export default TodoAdd;
