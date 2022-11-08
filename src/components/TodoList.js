import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";

function TodoList({
  todoList,
  deleteHandler,
  editHandler,
  editSubmitHandler,
  doneHandler,
}) {
  return (
    <ul>
      {todoList.length ? (
        todoList.map((item) =>
          item.edit ? (
            <TodoEdit
              key={item.id}
              item={item}
              editSubmitHandler={editSubmitHandler}
              editHandler={editHandler}
            />
          ) : (
            <TodoItem
              key={item.id}
              item={item}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              doneHandler={doneHandler}
            />
          )
        )
      ) : (
        <li>Aucune tâche pour le moment.</li>
      )}
    </ul>
  );
}

export default TodoList;
