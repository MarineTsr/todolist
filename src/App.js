import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import { useReducer } from "react";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";
import { todoStateContext, todoDispatchContext } from "./context/todo";
import ThemeSwitcher from "./components/ThemeSwitcher";
import todoReducer from "./reducers/todoReducer";

const initialState = { todoList: [], currentTheme: "light" };

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleThemeSwitcher = (event) => {
    dispatch({
      type: "THEME_SWITCHER",
      event,
    });
  };

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatchContext.Provider value={dispatch}>
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
              <TodoAdd />
              <hr className="mt-5 mb-4" />
              <TodoList />
            </div>
          </div>
        </themeContext.Provider>
      </todoDispatchContext.Provider>
    </todoStateContext.Provider>
  );
}

export default App;
