import { useContext } from "react";
import { todoStateContext, todoDispatchContext } from "../context/todo";
import ThemeSwitcher from "./ThemeSwitcher";

function TodoTheme({ children }) {
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

        {children}
      </div>
    </div>
  );
}

export default TodoTheme;
