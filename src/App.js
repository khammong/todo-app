import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SUCCESS, FAILURE } from './utils/const'
import "./App.css";

import { 
  getTodoListRequest, 
  addTodoListRequest,
  completeTodoListRequest,
  deleteTodoListRequest,
  updateTodoListRequest
} from './store/actions/todoList'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      {todo.title}
      <div>
        <button onClick={() => completeTodo(todo.title, index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add your todo..."
      />
    </form>
  );
}

function App() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoList.todoList)
  // const [todos, setTodos] = React.useState([
  //   {
  //     text: "Learn about React",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Meet friend for lunch",
  //     isCompleted: false
  //   },
  //   {
  //     text: "Build really cool todo app",
  //     isCompleted: false
  //   }
  // ]);

  useEffect(() => {
    dispatch(getTodoListRequest())
  }, [dispatch])

  useEffect(() => {
    if (addTodoListRequest.status === SUCCESS) {
      dispatch(completeTodoListRequest({completed: false}))
    }
  }, [dispatch])

  useEffect(() => {
    if (updateTodoListRequest.status === SUCCESS) {
      dispatch(completeTodoListRequest({completed: false}))
    }
  }, [dispatch])

  const addTodo = title => {
    dispatch(addTodoListRequest({title, completed: false}))
  };

  const completeTodo = (title, index) => {
    dispatch(completeTodoListRequest({id: index, completed: true}))
  };

  const removeTodo = index => {
    dispatch(deleteTodoListRequest(index))
  };

  return (
    <div className="app">
      <div className="todo-list">
      <div className="progress">
        <div className="title">
          Progress
        </div>
        <div className="progress-bar">progress bar</div>
        <div className="complete-bar">{todoList.data.length} completed</div>
      </div>
      <div className="action">
        <div className="title">Task</div>
        //TODO filter by completed todoList.data.filter((todo)
        <div className="select">
            <select>
            <option >All</option>
            <option>Done</option>
            <option>Undone</option>
          </select>
          
        </div>
      </div>
        {todoList.data.map((todo) => (
          <Todo
            key={todo.id}
            index={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;