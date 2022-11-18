import { useReducer, useEffect, useState } from "react";
import todoReducer from "../reducers/todoReducer";
import { todoStateContext, todoDispatchContext } from "../context/todo";
import themeContext from "../context/theme";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [],
    currentTheme: "light",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignoreResponse = false;

    // Never use an async func directly in useEffect param : it should return a cleaning function, not a promise !
    const getTodos = async () => {
      try {
        const response = await fetch("https://restapi.fr/api/MTtodos");

        if (response.ok && !ignoreResponse) {
          const todoList = await response.json();

          // Dyma server returns an array if > 1 todo, otherwise a document
          if (Array.isArray(todoList)) {
            dispatch({
              type: "TODO_INIT",
              todoList,
            });
          } else {
            dispatch({
              type: "TODO_INIT",
              todoList: [todoList],
            });
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getTodos();

    return () => {
      ignoreResponse = true;
    };
  }, []);

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatchContext.Provider value={dispatch}>
        <themeContext.Provider value={state.currentTheme}>
          {isLoading ? (
            <div className="d-flex justify-content-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            children
          )}
        </themeContext.Provider>
      </todoDispatchContext.Provider>
    </todoStateContext.Provider>
  );
}

export default TodoProvider;
