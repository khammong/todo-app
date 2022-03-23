import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { SUCCESS, FAILURE, PENDING } from './utils/const'
import "./App.css";

import { 
  getTodoListRequest, 
  addTodoListRequest,
  completeTodoListRequest,
  deleteTodoListRequest,
  updateTodoListRequest
} from './store/actions/todoList'

function Todo({ todo, index, completeTodo, removeTodo, handleEditTodo }) {
  const [checked, setChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div
      className="todo"
    >
      <input
        type="checkbox"
        checked={todo.completed ? true: checked}
        onChange={e => setChecked(e.target.checked)}
        onBlur={(e) => completeTodo(todo.title, index, e.target.checked)}
      />
      {isEdit? 
      <EditTodoForm handleEditTodo={handleEditTodo} title={todo.title} id={index}  />: 
      
      <div style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo && todo.title}</div>
      }
      <div className='menu-nav'>
        <div className="menu-item" />
        <div className="dropdown-container" tabIndex="-1">
          <div className="three-dots"></div>
          <div className="dropdown">
            <div className='dropdown-list' onClick={() => setIsEdit(true)}>Edit</div>
            <div className='dropdown-list' onClick={() => removeTodo(index)}>Delete</div>
          </div>
        </div>
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

function EditTodoForm({ handleEditTodo, title, id }) {
  const [value, setValue] = React.useState(title);

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    handleEditTodo(id, value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='edit-component'>
        <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Add your todo..."
        />
        <button 
          className='edit-button' 
          onClick={() => handleEditTodo(id, value)}
        >Save</button>
      </div>
    </form>
  );
}

function App() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoList.todoList)
  const [option, setOption] = useState('All')

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

  const completeTodo = (title, index, e) => {
    dispatch(completeTodoListRequest({id: index, title, completed: e}))
  };

  const removeTodo = index => {
    dispatch(deleteTodoListRequest(index))
  };

  const handleEditTodo = (index, title) => {
    dispatch(updateTodoListRequest({id: index, title, completed: false}))
  }
  let isLoading = todoList.status === PENDING

  return (
    <div className="app">
      <div className="todo-list">
      <div className="progress">
        <div className="title">
          Progress
        </div>
        <div className="progress-bar">progress bar</div>
        <div className="complete-bar"> show completed</div>
      </div>
      <div className="action">
        <div className="title">Task</div>
        <div className="select">
          <select id="animal"
            value={option}
            onChange={e => setOption(e.target.value)}
            onBlur={e => setOption(e.target.value)}
          >
            <option value='All'>All</option>
            <option value='Completed'>Done</option>
            <option value='Incomplete'>Undone</option>
          </select>
        </div>
      </div>
        {!isLoading ? todoList.data.map((todo) => (
          <Todo
            key={todo.id}
            index={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            handleEditTodo={handleEditTodo}
          />
        )): "loading ..."}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;