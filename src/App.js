import logo from './logo.svg';
import './App.css';
import menu from './menu.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="sobre">
          <div>SOBRE</div>
          <div className='Sobre-menu'>
            <img src={menu} className='Menu-icon' alt='Menu icon'/>
          </div>
        </div>
        <p>
          Edite o <code>src/App.js</code> e salve para reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendendo React
        </a>
      </header>
    </div>
  );
}

export default App;
