import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (text) => {
    setTodoList([
      ...todoList,
      {
        id: crypto.randomUUID(),
        content: text,
        done: false,
        edit: false,
      },
    ]);
  };

  const handleDelete = (id) => {
    const todoListUpdated = todoList.filter((item) => item.id !== id);
    setTodoList(todoListUpdated);
  };

  const handleEdit = (id) => {
    const todoListUpdated = todoList.map((item) =>
      item.id === id ? { ...item, edit: !item.edit } : item
    );
    setTodoList(todoListUpdated);
  };

  const handleEditSubmit = (id, text) => {
    const todoListUpdated = todoList.map((item) =>
      item.id === id ? { ...item, content: text, edit: false } : item
    );
    setTodoList(todoListUpdated);
  };

  const handleDone = (id) => {
    const todoListUpdated = todoList.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodoList(todoListUpdated);
  };

  return (
    <div className="bg-light vh-100">
      <div className="container py-5">
        <h1>TodoList</h1>
        <TodoAdd submitHandler={handleSubmit} />
        <hr className="mt-5 mb-4" />
        <TodoList
          todoList={todoList}
          deleteHandler={handleDelete}
          editHandler={handleEdit}
          editSubmitHandler={handleEditSubmit}
          doneHandler={handleDone}
        />
      </div>
    </div>
  );
}

export default App;
