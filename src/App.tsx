// cambiar todo a task
import { useState } from "react"
import "../src/assets/styles/App.css"
import InputField from "./components/input/InputField"
import TodoList from "./components/TodoList/TodoList"
import { Todo } from "./services/model"
import { DragDropContext, DropResult } from "react-beautiful-dnd"

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  };

  const onDragEnd = (result: DropResult) => {
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </span>
      </div>
    </DragDropContext>
  );
};

export default App;
