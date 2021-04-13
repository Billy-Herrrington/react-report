# React
React - це декларативна, ефективна і гнучка бібліотека JavaScript для створення користувацьких інтерфейсів (UI). Вона дозволяє вам створювати складні UI з невеликих і ізольованих частин коду, званих « компонентами ».
## Розглянемо оголошення змінної:

```js
const element = <h1>Привет, мир!</h1>;
```

Це JSX - розширення мови JavaScript. Ми рекомендуємо використовувати його, коли потрібно пояснити React, як повинен виглядати UI. JSX нагадує мову шаблонів, наділений силою JavaScript.
JSX створює «елементи» React.
React можна використовувати і без JSX , але його цінюють за наочність при роботі з UI, який живе в JavaScript-коді. Крім цього, JSX допомагає React робити повідомлення про помилки та попередження зрозуміліше.
Також ми можемо оголошувати змінні там потім використовувати їх в всередині JSX, обрамляючи фігурними дужками:
```js
const name = 'Some';
const element = <h1>Hello, {name}!</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
JSX допускає використання будь-яких коректних JavaScript-виразів всередині фігурних дужок. 
### Наприклад:
- 2 + 2, 
- user.firstName
- formatName(user).

Після компіляції кожне JSX-вираз стає звичайним викликом JavaScript-функції, результат якого - об'єкт JavaScript.
З цього випливає, що JSX можна використовувати всередині виразів if і циклів for, привласнювати змінним, передавати функції в якості аргументу і повертати з функції.
```js
function getSomeUser(id) {
  if (id) {
    return <h1>Hello, {id}!</h1>;
  }
  return <h1>We don't know who you are!</h1>;
}
```
## Бандлінг
Більшість React-додатків збирають свої файли такими інструментами, як Webpack , Rollup або Browserify . 
Збірка  - це процес виявлення імпортованих файлів і об'єднання їх в один «зібраний» файл (часто званий «bundle» або «бандл»). Цей бандл після підключення на веб-сторінку завантажує весь додаток за один раз.
```js
// app.js
import { add } from './math.js';
console.log(add(16, 26)); // 42
________________________________
// math.js
export function add(a, b) {
  return a + b;
}
```
Кращий спосіб впровадити поділ коду в додаток - використовувати синтаксис динамічного імпорту: import().
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
```
як це відбувається при створенні нашого проекту - [create react app](https://uk.reactjs.org/docs/create-a-new-react-app.html).
```js
import React from 'react';
```
є обов'язковий, оскільки без нього, Babel не зможе працювати і синтаксис JSX не буде прийматися.
Помилка:
```js
Failed to compile
src\index.js
  Line 7:16:  'React' is not defined  no-undef
Search for the keywords to learn more about each error.
```
Якщо ми створюємо елемент більше 1 строки, є обов'язковим поставити '()' і помістити все в блочний елемент типу div.
```js
const elem_3 = (
  <div>
    <h3>Hello my friend!</h3>
    <input type='text' placeholder='Type smth'></input>
    <button>Some button</button>
  </div>
);
```
Інакше буде помилка:

```js
./src/index.js
SyntaxError: C:\Users\Bohdan\Desktop\test\src\index.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (11:4)
```
# Візуалізація елементів
На відміну від DOM-елементів, елементи React - це прості об'єкти, що не віднімають багато ресурсів. React DOM оновлює DOM, щоб він відповідав переданим React-елементам.
Якщо ж ми говоримо про стилі то їх можна під'єднувати за допомогою:
```js
import './style.css'
```
де, style.css лежить в тій же папці.
або ж записувати стилі в об'єкті та передавати в атрибут style = {}. Наприклад:
```js
const styleUl = {
  ul: {
    listStyle: 'none',
  }
}
const Add = () =>{
  return (
    <ul  style = {styleUl.ul}>
      <li>
        Hello
      </li>
    </ul>
  )
}

ReactDOM.render(<Add></Add>, document.getElementById('root')
);
````
## Розглянемо приклад
```js 
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
У цьому прикладі ReactDOM.render()викликається щосекунди за допомогою колбека setInterval().
# Компоненти і пропси
Компоненти дозволяють розбити інтерфейс на незалежні частини, про які легко думати окремо. Їх можна складати разом і використовувати кілька разів.
Найпростіше оголосити React-компонент як функцію:
```js
function f(props) {
  return <h1>Hi, {props.name}</h1>;
}
```
Ця функція - компонент, тому що вона отримує дані в одному об'єкті ( «пропси») в якості параметра і повертає React-елемент. Ми будемо називати такі компоненти «функціональними», так як вони буквально є функціями.
Також компоненти можна визначати як класи:
```js
class F extends React.Component {
  render() {
    return <h1>Hi, {this.props.name}</h1>;
  }
}
```
Елементи можуть описувати і наші власні компоненти:
```JS
const element = <Welcome name="Алиса" />;
```
Коли React зустрічає подібний елемент, він збирає всі JSX-атрибути і дочірні елементи в один об'єкт і передає їх нашому компоненту. Цей об'єкт називається props.

Наприклад, цей компонент виведе «Some, Name» на сторінку:
```js
function Welcome(props) {
  return <h1>Some, {props.name}</h1>;
}

const element = <Welcome name="Name" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```
Компоненти можуть посилатися на інші компоненти. Це дозволяє нам використовувати ту ж саму абстракцію компонента для будь-якого рівня деталізації. Кнопка, форма, діалог, екран: в React-додатку всі ці сутності виражені компонентами.

Наприклад, ми можемо створити компонент App, який показує компонент W багато разів:
```js
function W(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```
# Обробка подій
Обробка подій в React-елементах дуже схожа на обробку подій в DOM-елементах. Але є кілька синтаксичних відмінностей:

- Події в React іменуються в стилі camelCase(верблюжа нотація) замість нижнього регістра.
- З JSX ви передаєте функцію як обробник події замість рядка.

Наприклад, в HTML:
```html
<button onclick="activateLasers()">
  Активировать лазеры
</button>
```
або ось такий HTML:
```html
 <button onclick="deleteAllUsers()">Удалить всех пользователей</button>
```
У React:
```js
<button onClick={activateLasers}>
  Активировать лазеры
</button>

<button onClick={deleteAllUsers}>Удалить всех пользователей</button>
```
У React, щоб запобігти поведінка за умовчанням Ви повинні явно викликати preventDefault().
```js
function DeleteUserLink() {
    function onClick(event) {
      event.preventDefault();
      console.log('Пользователь был удален.');
    }

    return (
      <a href="#" onClick={onClick}>Remove user</a>
    );
  }
```
Тут event- це синтетичне подія. React визначає такі синтетичні події відповідно до специфікації W3C.
### Так само і з атрибутами, іх ми записуємо у вигляді CamelCase:
- className
- autoComplete
і так далі
### PropTypes
По мірі зростання вашого додатку, ви зможете піймати багато помилок з перевіркою типів.
Для виконання перевірки типів пропсів ви можете присвоїти спеціальну властивість propTypes компоненту:
```js
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
```
PropTypes експортує ряд валідаторів, які можуть бути використані щоб впевнитись, що ви отримали вірні дані. В наведеному вище прикладі ми використовуємо propTypes.arrayOf(propTypes.object) та propTypes.func.
#### isRequired показує, що ці дані потрібно передавати обов'язково.
