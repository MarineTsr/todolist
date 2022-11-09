import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import themeContext from "./data/theme";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTheme, setCurrentTheme] = useState("light");

  const handleSubmit = (text) => {
    if (text.length > 0) {
      setTodoList([
        ...todoList,
        {
          id: crypto.randomUUID(),
          content: text,
          done: false,
          edit: false,
        },
      ]);
    }
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
    if (text.length > 0) {
      const todoListUpdated = todoList.map((item) =>
        item.id === id ? { ...item, content: text, edit: false } : item
      );
      setTodoList(todoListUpdated);
    }
  };

  const handleDone = (id) => {
    const todoListUpdated = todoList.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodoList(todoListUpdated);
  };

  const handleThemeSwitcher = (event) => {
    setCurrentTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <themeContext.Provider value={currentTheme}>
      <div
        className={`vh-100 bg-${currentTheme} ${
          currentTheme === "dark" ? "text-white" : "text-dark"
        }`}
      >
        <div className="container py-5">
          <div className="mb-5 d-flex justify-content-end">
            <ThemeSwitcher switchHandler={handleThemeSwitcher} />
          </div>

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
    </themeContext.Provider>
  );
}

export default App;
