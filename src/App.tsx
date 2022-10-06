// cambiar todo a task
import { useState } from "react"
import "../src/assets/styles/App.css"
import InputField from "./components/input/InputField"
import TodoList from "./components/TodoList/TodoList"
import { Todo } from "./services/model"

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  };

  console.log(todos);

  return (
    <div>
      <span className="App">
        {/*header*/}
        <span className="heading">Project Manager</span>

        {/*input*/}
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAdd={handleAdd}
        />

        {/*task list*/}
        <TodoList todos={todos} setTodos={setTodos} />
        {/* {todos.map((t) => (
          <li>{t.todo}</li>
        ))} */}
      </span>
    </div>
  );
};

export default App;
