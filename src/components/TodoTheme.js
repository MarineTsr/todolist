import { useContext } from "react";
import { todoStateContext, todoDispatchContext } from "../context/todo";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import ThemeSwitcher from "./ThemeSwitcher";

function TodoTheme() {
  const state = useContext(todoStateContext);
  const dispatch = useContext(todoDispatchContext);

  const handleThemeSwitcher = (event) => {
    dispatch({
      type: "THEME_SWITCHER",
      event,
    });
  };

  return (
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
        <TodoAdd />
        <hr className="mt-5 mb-4" />
        <TodoList />
      </div>
    </div>
  );
}

export default TodoTheme;
