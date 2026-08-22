import React, { useContext } from 'react';
import { textContext } from '../pages/Home';

const Grandchild = () => {

  const text = useContext(textContext);

  return (
    <h3>Received Text: {text}</h3>
  );
};

export default Grandchild;