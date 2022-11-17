import TodoEdit from "./TodoEdit";
import TodoItem from "./TodoItem";
import { todoStateContext } from "./../context/todo";
import { useContext } from "react";

function TodoList() {
  const state = useContext(todoStateContext);

  return (
    <ul>
      {state.todoList.length ? (
        state.todoList.map((item) =>
          item.edit ? (
            <TodoEdit key={item._id} item={item} />
          ) : (
            <TodoItem key={item._id} item={item} />
          )
        )
      ) : (
        <li>Aucune tâche pour le moment.</li>
      )}
    </ul>
  );
}

export default TodoList;
