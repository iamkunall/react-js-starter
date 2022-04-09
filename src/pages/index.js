import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
    },
  ];

  return (
    <div className="App">
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
        <div>
          <div>
            {products.map((product) => (
              <div>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <Link to="/about">
          <h1>About</h1>
        </Link>
      </header>
    </div>
  );
};

export default Home;
