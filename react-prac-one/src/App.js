import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Some Name';
  const element = <h1>Hello, {name}!</h1>;
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
