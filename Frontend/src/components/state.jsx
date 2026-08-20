import React, { useState, useEffect } from 'react';

const State = () => {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("from useeffect");
  }, [show]);

  return (
    <div>

      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br /><br />

      {show && <h2>This is hidden message</h2>}

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

    </div>
  );
};

export default State;