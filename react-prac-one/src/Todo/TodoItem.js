import React,{useContext} from 'react';
import propTypes from 'prop-types'; //Валідація
import './TodoItem.css';
import Context from '../context';

const styles = {
    li:{
        justifyContent:'space-between',
        alignItems: 'left',
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '.5rem 1rem',
        marginBottom: '.5rem',
        width: '200px',

    },
    input:{
        marginRight: '1rem',

    }
}

function TodoItem({todo,index, onChange}){
    // console.log(todo);
    const {remove} = useContext(Context);
    const classes = [];
    if(todo.complated){
        classes.push('done');
    }
    return(
        <li style = {styles.li}>
            <span className={classes.join(' ')}>
                <input chacked={todo.complated} style={styles.input} type='checkbox' onChange={() => onChange(todo.id)}>
                </input>
                <string>[{index + 1}] </string>{todo.title}
            </span>
            <button onClick={() => remove(todo.id)} className='btn'>&times;</button>
        </li>
            
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    onChange: propTypes.func.isRequired,
}

export default TodoItem;