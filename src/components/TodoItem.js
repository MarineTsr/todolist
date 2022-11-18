import TodoButton from "./TodoButton";
import { todoDispatchContext } from "./../context/todo";
import { useContext } from "react";

function TodoItem({ item }) {
  const dispatch = useContext(todoDispatchContext);

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

  const deleteTodo = async (todo) => {
    try {
      const response = await fetch(
        `https://restapi.fr/api/MTtodos/${todo._id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        dispatch({
          type: "TODO_DELETE",
          todo: await response.json(),
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <li className="form-check my-3">
      <input
        className="form-check-input me-3"
        id={item._id}
        type="checkbox"
        onClick={() => updateTodo({ ...item, done: !item.done })}
        defaultChecked={item.done}
      />
      <label
        className="form-check-label d-flex justify-content-between"
        htmlFor={item._id}
      >
        <span className={`${item.done ? "text-decoration-line-through" : ""}`}>
          {item.content}
        </span>

        <div>
          {!item.done && (
            <TodoButton
              label="Modifier"
              type="button"
              className="btn-primary"
              onClick={(event) => {
                event.stopPropagation();
                dispatch({
                  type: "TODO_EDIT_MODE",
                  _id: item._id,
                });
              }}
            />
          )}

          <TodoButton
            label="Supprimer"
            type="button"
            className="btn-danger ms-3"
            onClick={(event) => {
              event.stopPropagation();
              deleteTodo(item);
            }}
          />
        </div>
      </label>
    </li>
  );
}

export default TodoItem;
