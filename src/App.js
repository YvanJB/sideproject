import logo from './logo.jpg';
import './App.css';
import homeicon from './home-icon.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="nav">
        <ul>
          <li>{homeicon}</li>
        </ul>
      </div>
       
      </header>
    </div>
  );
}

export default App;
