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
## Інлайнова стилізація React компонентів
Якщо ви знайомі з простим HTML, то ви вже знаєте, що можна додавати ваші стилі CSS інлайново. Це майже так само, як і в React.
Ми можемо додавати інлайновие стилі компонентам. Такі стилі записані як атрибути і передаються елементу. 
```js
class ToDoApp extends React.Component {
  // ...
  render() {
    return (
      <div style={{ backgroundColor: "#44014C", width: "300px", minHeight: "200px"}}>
        <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>ToDo</h2>
        <div>
          <Input onChange={this.handleChange} />
          <p>{this.state.error}</p>
          <ToDoList value={this.state.display} />
        </div>
      </div>
    )
  }
}
```

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
# PropTypes
По мірі зростання вашого додатку, ми зможемо піймати багато помилок з перевіркою типів.
Для виконання перевірки типів пропсів ми можемо присвоїти спеціальну властивість propTypes компоненту:
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
PropTypes експортує ряд валідаторів, які можуть бути використані щоб впевнитись, що ми отримали вірні дані. В наведеному вище прикладі ми використовуємо propTypes.arrayOf(propTypes.object) та propTypes.func.
#### isRequired показує, що ці дані потрібно передавати обов'язково.
# React хуки
Хуки — це новинка в React 16.8. Вони є функціями, за допомогою яких ми можете “зачепитися” за стан та методи життєвого циклу React з функційних компонентів. Хуки не працюють всередині класів — вони дають вам можливість використовувати React без класів.
## React useState
```js
import React, { useState } from 'react';

function Example() {
  // Створюємо нову змінну стану, яку назвемо "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>
    </div>
  );
}
```
У цьому прикладі, useState — це хук (визначення хуку наведенно нижче). Ми викликаємо його для того, щоб надати внутрішній стан нашому компоненту. React буде зберігати цей стан між повторними рендерами. Виклик useState повертає дві речі: поточне значення стану та функцію, яка дозволяє оновлювати цей стан.

Ми можемо використовувати хук стану більше одного разу в одному компоненті:
```js
function Example() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('банан');
  const [todos, setTodos] = useState([{ text: 'Вивчити хуки' }]);
}
```
Синтаксис деструктуризації масивів дозволяє нам по різному називати змінні стану, які ми оголошуємо при виклику useState. Ці імена не є частиною API useState. Натомість, React припускає, що якщо ми викликаємо useState багато разів, то ви робите це в тому ж порядку під час кожного рендеру.
## React useEffect
Хук ефекту дозволяє вам виконувати побічні ефекти в функціональному компоненті:
```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Подібно до componentDidMount та componentDidUpdate:
  useEffect(() => {
    // Оновлюємо заголовок документа, використовуючи API браузера
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>
    </div>
  );
}
```
Побічними ефектами в React є завантаження даних, оформлення підписки і зміна вручну DOM в React-компонентах.
```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Ви натиснули ${count} разів`;
  });

  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>
    </div>
  );
}
```
Використовуючи цей хук, ви говорите React зробить щось після рендера компонента. React запам’ятає функцію (тобто “ефект”), яку ви передали та викличе її після того, як внесе зміни в DOM.
# Фрагменти
Повернення кількох елементів з компонента є поширеною практикою в React. Фрагменти дозволяють формувати список дочірніх елементів, не створюючи зайвих вузлів в DOM.
```js
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```
## Ще приклад
```js
class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <div>
        <td>Привіт</td>
        <td>Світe</td>
      </div>
    );
  }
}
```
### Результат
```js
<table>
  <tr>
    <div>
      <td>Привіт</td>
      <td>Світe</td>
    </div>
  </tr>
</table>
```
#### Фрагменти вирішують цю проблему.
```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Привіт</td>
        <td>Світe</td>
      </React.Fragment>
    );
  }
}

------>

<table>
  <tr>
    <td>Привіт</td>
    <td>Світe</td>
  </tr>
</table>
```
# Списки  React
Ми можеМО створювати колекції елементів і включати їх у JSX за допомогою фігурних дужок {}.
Говорячи про списки в React, то їх ми можемо створювати завдяки array.map():
```js
const m = [1, 2, 3, 4, 5];
const listItems = m.map((item) =>
  <li>{item}</li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```
### Ще приклад
```js
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```
Коли ви запустите цей код, ви отримаєте попередження, що для елементів списку має бути вказано ключ. “Ключ” - це спеціальний рядковий атрибут, який потрібно вказувати при створенні списку елементів.
Щоб виправити проблему з невказаними ключами, призначмо нашим елементам списку атрибут key всередині numbers.map().
```js
///
<li key={number.toString()}>
///
```
Ключі допомагають React визначити, які елементи були змінені, додані або видалені. 
Найкращий спосіб вибрати ключ - це використати рядок, котрий буде однозначно відрізняти елемент списку від його сусідів. 
Наприклад в ключі ми можемо використовувати ID:
```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```
