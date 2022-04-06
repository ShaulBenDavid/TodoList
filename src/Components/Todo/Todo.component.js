import './Todo.component.css';
import React from 'react';
import './Todo.component.css'

const Todo = (props) => {
  const todos = [...props.todos];
  

  return (
      <div className={ todos.length > 0 ? 'todos-container' : ''}>
          {todos.map((todo, idx) =>
            <div
              className={todo.complete ? "task complete" : "task"} key={idx}
              
              >
              <div className="touchBar" onClick={() => props.completeTodo(idx)}>
                <h3
                  className="task-content"
                >
                  {todo.text}
                </h3>
                </div>
              <span className='close-button' onClick={() => props.removeTodo(idx)}></span>
            </div>
          )}
        </div>
  )
}

export default Todo;