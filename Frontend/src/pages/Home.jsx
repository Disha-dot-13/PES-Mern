import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import Parent from '../components/Parent';

export const textContext = createContext();

const Home = () => {

  const text = "prop value from home";

  return (
    <div>
      <h1>Home Page</h1>

      <p>Welcome to the Home Page!</p>

      <ul>
        <li>
          <Link to="/state">Use State Example</Link>
        </li>

        <li>
          <Link to="/form">Controlled Form Using UseState</Link>
        </li>

        <li>
          <Link to="/effect">Use Effect Example</Link>
        </li>
      </ul>

      <textContext.Provider value={text}>
        <Parent />
      </textContext.Provider>

    </div>
  );
};

export default Home;