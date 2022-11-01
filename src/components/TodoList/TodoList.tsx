import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Todo } from '../../services/model'
import SingleTodo from '../SingleTodo/SingleTodo'
import "./styles.css"

interface Props {
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos: Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({
    todos,
    setTodos,
    completedTodos,
    setCompletedTodos
}) => {
    // need a prop with the columns ids, to use taht as droppeableId, like the index or key maybe

    return (
        < div className="container" >
            <Droppable droppableId="TodosList">
                {(provided, snapshot) => (
                    <div
                        className={`todos active ${snapshot.isDraggingOver ? "dragactive" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">
                            Active tasks
                        </span>
                        {
                            todos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    key={todo.id}
                                    todos={todos}
                                    setTodos={setTodos}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            <Droppable droppableId="TodosRemove">
                {(provided, snapshot) => (
                    <div
                        className={`todos remove ${snapshot.isDraggingOver ? "dragremove" : ""}`}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <span className="todos__heading">
                            Completed tasks
                        </span>
                        {
                            completedTodos.map((todo, index) => (
                                <SingleTodo
                                    index={index}
                                    todo={todo}
                                    key={todo.id}
                                    todos={completedTodos}
                                    setTodos={setCompletedTodos}
                                />
                            ))
                        }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div >
    )
}

export default TodoList
