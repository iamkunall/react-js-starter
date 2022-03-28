import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      {' '}
      CHL
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/about">
          <h1>About</h1>
        </Link>
      </header>
    </div>
  );
};

export default Home;
