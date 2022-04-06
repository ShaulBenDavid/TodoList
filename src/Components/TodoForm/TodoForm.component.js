import React from 'react';
import PlusButton from './Plus-Button.png';
import { useState, useRef, useEffect } from 'react';
import './TodoForm.component.css'



const TodoForm = (props) => {
    // Set a new task
    const [todo, setTodo] = useState(() => '');
    const todoInput = useRef();
    

    useEffect(() => {
        todoInput.current.focus();
    },[]);

    // Send a new wask
    const onSubmit = (event) => {
        event.preventDefault();
        props.addTodoEvent(todo);
        setTodo('');   
    }

    return (
        <div className='form-container'>
            <form className='form'> 
                <input
                    ref={todoInput}
                    value={todo} type="text"
                    placeholder='Write a Task Here'
                    onChange={(event) => setTodo(event.target.value)}
                />
                <img src={PlusButton} alt="Plus-Button" onClick={onSubmit} className="button" />
            </form>
        </div>
    )
}

export default TodoForm;