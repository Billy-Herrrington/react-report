import React from 'react';
import TodoItem from './TodoItem'
import propTypes from 'prop-types'; //Валідація

const styleList = {
    ul:{
        listStyle: 'none',
        color: 'black',
        // textTransform: 'uppercase',
    }
}

function TodoList(props){
    return(
        <ul style = {styleList.ul}>
            {props.todos.map((todo,index) => {
                return <TodoItem index={index} todo={todo} key={todo.id} onChange={props.onToggle}></TodoItem>;
                })
            }
        </ul>
        )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onToggle: propTypes.func.isRequired,
}

export default TodoList;