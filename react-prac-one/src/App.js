import { func } from 'prop-types';
import React from 'react';
import './App.css';
import './Todo/TodoList'
import TodoList from './Todo/TodoList';
import Context from './context'


function App() {
  // const name = 'Some Name';
  // const element = <h1>Hello, {name}!</h1>;
  const [todos,setTodos] = React.useState([
    {
      id:1,
      complated: false,
      title: 'Name_0'
    },
    {
      id:2,
      complated: false,
      title: 'Name_1'
    },
    {
      id:3,
      complated: false,
      title: 'Name_2'
    },
  ]);
  
  function onTap(id){
    setTodos(todos.map(todo =>{
      if(todo.id === id){
        todo.complated = !todo.complated;
      }
      return todo;
    }))
  }

  function remove(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    // <div className="App">
    //   {element}
    // </div>
    // <div>
    //   {2+3}
    // </div>
    <Context.Provider value={{remove}}>
      <div className='wrapper'>
        <h1>Stetsenko Bogdan</h1>
        <TodoList todos = {todos} onToggle={onTap}></TodoList>
      </div>
    </Context.Provider>
  );
}

export default App;
