import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import TodoProvider from "./components/TodoProvider";
import TodoTheme from "./components/TodoTheme";

function App() {
  return (
    <TodoProvider>
      <TodoTheme />
    </TodoProvider>
  );
}

export default App;
