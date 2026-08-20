import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>

      <h1>Home Page</h1>

      <p>Welcome to the Home Page!</p>

      <ul>

        <li>
          <Link to="/state">
            Use State Example
          </Link>
        </li>

        <li>
          <Link to="/form">
            Controlled Form Using UseState
          </Link>
        </li>

        <li>
          <Link to="/effect">
            Use Effect Example
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default Home;