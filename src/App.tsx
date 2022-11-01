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
    const { source, destination } = result;
    // if destination outside the columns
    if (!destination) return;

    // if destination insde the same column
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    let add, active = todos, complete = completedTodos;

    // source to destination
    if (source.droppableId === 'TodosList') {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // destination from source
    if (destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);

    console.log(result)
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
