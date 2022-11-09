import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import { useReducer } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import ThemeSwitcher from "./components/ThemeSwitcher";
import todoReducer from "./reducers/todoReducer";

const initialState = { todoList: [], currentTheme: "light" };

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (text) => {
    dispatch({
      type: "TODO_SUBMIT",
      text,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "TODO_DELETE",
      id,
    });
  };

  const handleEdit = (id) => {
    dispatch({
      type: "TODO_EDIT_MODE",
      id,
    });
  };

  const handleEditSubmit = (id, text) => {
    dispatch({
      type: "TODO_EDIT_SUBMIT",
      id,
      text,
    });
  };

  const handleDone = (id) => {
    dispatch({
      type: "TODO_IS_DONE",
      id,
    });
  };

  const handleThemeSwitcher = (event) => {
    dispatch({
      type: "THEME_SWITCHER",
      event,
    });
  };

  return (
    <themeContext.Provider value={state.currentTheme}>
      <div
        className={`vh-100 bg-${state.currentTheme} ${
          state.currentTheme === "dark" ? "text-white" : "text-dark"
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
            todoList={state.todoList}
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
