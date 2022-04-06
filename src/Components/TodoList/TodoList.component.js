import React from 'react';
import TodoForm from '../TodoForm/TodoForm.component';
import { useState } from 'react';
import Todo from '../Todo/Todo.component';
import './TodoList.component.css';
import DateTitle from '../DateTitle/DateTitle.component'


const TodoList = (props) => {
    const [todos, setTodos] = useState(() => []);
    
    const addTodoEvent = (todo) => {
        if (!todo || /^\s*$/.test(todo)) {
            return;
        }
        const newList = [{text: todo, complete: false}, ...todos];
        setTodos(newList);
    }

    const removeTodo = id => {
        const removeFromList = [...todos].filter((todo, idx) => idx !== id);
        setTodos(removeFromList);
    }

    const completeTodo = (idx) => {
        const taskComplete = [...todos].map((todo, id) => {
            if (idx === id) {   
                todo.complete = !todo.complete;
                return todo;
            }
            return todo;
        })
        setTodos(taskComplete);

    }    


    return (
        <div className='todo-list'>
            <div className='header'>
                <DateTitle className='DateTitle'/>
                <TodoForm addTodoEvent={addTodoEvent} className='TodoForm'/>
            </div>
            <Todo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}/>      
        </div>
    )
}

export default TodoList;