import { useState, useContext } from "react";
import TodoButton from "./TodoButton";
import { todoDispatchContext } from "./../context/todo";

function TodoEdit({ item }) {
  const [inputValue, setInputValue] = useState(item.content);
  const dispatch = useContext(todoDispatchContext);

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const updateTodo = async (todo) => {
    try {
      // IMPORTANT : when update needed, don't send the id in the body !
      const { _id, ...todoRest } = todo;
      const response = await fetch(
        `https://restapi.fr/api/MTtodos/${todo._id}`,
        {
          method: "PATCH",
          body: JSON.stringify(todoRest),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        dispatch({
          type: "TODO_UPDATE",
          todo: await response.json(),
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyDown = (todo, event) => {
    if (event.key === "Escape") {
      dispatch({
        type: "TODO_EDIT_MODE",
        _id: todo._id,
      });
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue.length > 0) {
          updateTodo({ ...item, content: inputValue, edit: false });
        }
      }}
      onKeyDown={(event) => handleKeyDown(item, event)}
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
