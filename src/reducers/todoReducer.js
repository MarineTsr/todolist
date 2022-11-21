function todoReducer(state, action) {
  switch (action.type) {
    case "TODO_INIT":
      return {
        ...state,
        todoList: action.todoList,
      };
    case "TODO_ADD":
      return {
        ...state,
        todoList: [...state.todoList, action.todo],
      };
    case "TODO_UPDATE":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item._id === action.todo._id ? action.todo : item
        ),
      };
    case "TODO_DELETE":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item._id !== action._id),
      };
    case "TODO_EDIT_MODE":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item._id === action._id ? { ...item, edit: !item.edit } : item
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
