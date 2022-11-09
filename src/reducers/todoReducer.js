function todoReducer(state, action) {
  switch (action.type) {
    case "TODO_SUBMIT":
      if (action.text.length > 0) {
        return {
          ...state,
          todoList: [
            ...state.todoList,
            {
              id: crypto.randomUUID(),
              content: action.text,
              done: false,
              edit: false,
            },
          ],
        };
      } else {
        return state;
      }
    case "TODO_DELETE":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.id),
      };
    case "TODO_EDIT_MODE":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.id ? { ...item, edit: !item.edit } : item
        ),
      };
    case "TODO_EDIT_SUBMIT":
      if (action.text.length > 0) {
        return {
          ...state,
          todoList: state.todoList.map((item) =>
            item.id === action.id
              ? { ...item, content: action.text, edit: false }
              : item
          ),
        };
      } else {
        return state;
      }
    case "TODO_IS_DONE":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        ),
      };
    case "THEME_SWITCHER":
      return {
        ...state,
        currentTheme: action.event.target.checked ? "dark" : "light",
      };
    default:
      throw new Error();
  }
}

export default todoReducer;
