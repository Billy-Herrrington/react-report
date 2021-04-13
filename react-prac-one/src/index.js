import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_1 from './App_1';
import TodoList from './Todo/TodoList'

const elem = <h2>Hello World!</h2>;
const elem_1 = React.createElement('h2',null,'Hello World'); //более старый синтаксис,не желательно использовать
const elem_3 = (
  <div>
    <h3>Hello my friend!</h3>
    <input type='text' placeholder='Type smth'></input>
    <button>Some button</button>
  </div>
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick,1000);

//----------------- Компоненти і пропси ----------------- 
// function Welcome(props) {
//   return <h1>Some, {props.name}</h1>;
// }

// const element = <Welcome name="Name" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
//----------------- Компоненти і пропси ----------------- 

const Header = () =>{ 
  return <h1>It is our header!</h1>
}
const Field = () =>{
  const styleField = {
    width: '500px',
    borderRadius: '5px',
  }
  const holder = 'Our input'
  return <input type='text' placeholder={holder} style = {styleField}></input>
}
const Btn = ()=>{
  const text = 'Our button';
  const logged = false;
  // const res = ()=>{
  //   return 'Our func button';
  // }
  // const p = <p>Log in</p>;
  // const obj = {}; ERROR!!!
  // return <button>{text}</button>
  // return <button>{res()}</button>
  return <button>{logged ? null:text}</button>
}

const Add = () =>{
  return (
    <div>
      <Header></Header>
      <Field></Field>
      <Btn></Btn>
    </div>
  )
}

const Table = () =>{
  return(
    <div>
      <TodoList></TodoList>
    </div>
  )
}

ReactDOM.render(<App></App>, document.getElementById('root')
);




