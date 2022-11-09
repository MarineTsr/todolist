import TodoButton from "./TodoButton";

function TodoItem({ item, deleteHandler, editHandler, doneHandler }) {
  return (
    <li className="form-check my-3">
      <input
        className="form-check-input me-3"
        id={item.id}
        type="checkbox"
        onClick={() => doneHandler(item.id)}
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
                editHandler(item.id);
              }}
            />
          )}

          <TodoButton
            label="Supprimer"
            type="button"
            className="btn-danger ms-3"
            onClick={(event) => {
              event.stopPropagation();
              deleteHandler(item.id);
            }}
          />
        </div>
      </label>
    </li>
  );
}

export default TodoItem;
