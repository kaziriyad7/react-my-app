import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name : "Kazi Riyad",
    job : "Developer"
  }
  var style = {
    color: 'gray',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2 style={style}> DETELES : {person.name + " " + person.job} </h2>
      </header>
    </div>
  );
}

export default App;
