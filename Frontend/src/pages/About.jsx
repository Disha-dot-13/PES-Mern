import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>

      <p>
        This is the About Page.
      </p>

      <Link to="/products">
        <button>View Products</button>
      </Link>
    </div>
  );
};

export default About;