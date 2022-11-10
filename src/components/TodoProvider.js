import { useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
import { todoStateContext, todoDispatchContext } from "../context/todo";
import themeContext from "../context/theme";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    currentTheme: "light",
  });

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatchContext.Provider value={dispatch}>
        <themeContext.Provider value={state.currentTheme}>
          {children}
        </themeContext.Provider>
      </todoDispatchContext.Provider>
    </todoStateContext.Provider>
  );
}

export default TodoProvider;
