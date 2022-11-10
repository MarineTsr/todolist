import TodoButton from "./TodoButton";
import { todoDispatchContext } from "./../context/todo";
import { useContext } from "react";

function TodoItem({ item }) {
  const dispatch = useContext(todoDispatchContext);

  return (
    <li className="form-check my-3">
      <input
        className="form-check-input me-3"
        id={item.id}
        type="checkbox"
        onClick={() =>
          dispatch({
            type: "TODO_IS_DONE",
            id: item.id,
          })
        }
      />
      <label
        className="form-check-label d-flex justify-content-between"
        htmlFor={item.id}
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
                  id: item.id,
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
              dispatch({
                type: "TODO_DELETE",
                id: item.id,
              });
            }}
          />
        </div>
      </label>
    </li>
  );
}

export default TodoItem;
