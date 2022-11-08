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
            <button
              type="button"
              className="btn btn-primary"
              onClick={(event) => {
                event.stopPropagation();
                editHandler(item.id);
              }}
            >
              Modifier
            </button>
          )}

          <button
            type="button"
            className="btn btn-danger ms-3"
            onClick={(event) => {
              event.stopPropagation();
              deleteHandler(item.id);
            }}
          >
            Supprimer
          </button>
        </div>
      </label>
    </li>
  );
}

export default TodoItem;
