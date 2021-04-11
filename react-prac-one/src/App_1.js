import logo from './logo.svg';
import './App.css';

function App_1() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Name',
    lastName: 'Surname'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App_1;
