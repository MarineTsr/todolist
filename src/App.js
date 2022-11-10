import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import TodoProvider from "./components/TodoProvider";
import TodoTheme from "./components/TodoTheme";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
      <TodoTheme>
        <h1>TodoList</h1>
        <TodoAdd />
        <hr className="mt-5 mb-4" />
        <TodoList />
      </TodoTheme>
    </TodoProvider>
  );
}

export default App;
