import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

import State from './components/state';
import Form from './components/Form';
import Effect from './components/Effect';

import Products from './components/Products';
import Productsdetails from './components/Productsdetails';

const App = () => {

  return (
    <>
      <Navbar />

      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        {/* React Examples */}
        <Route path="/state" element={<State />} />
        <Route path="/form" element={<Form />} />
        <Route path="/effect" element={<Effect />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<Productsdetails />}
        />

      </Routes>
    </>
  );
};

export default App;