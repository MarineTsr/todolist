import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.scss";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="bg-light vh-100">
      <div className="container py-5">
        <h1>TodoList</h1>
        <TodoAdd />
        <hr />
        <hr />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
