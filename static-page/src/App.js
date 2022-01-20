import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
        <img src={logo} className = 'App-logo' alt="logo" />
        </nav>
      </header>
      <h1>Here is a heading</h1>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
