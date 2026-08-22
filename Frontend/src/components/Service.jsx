import React from 'react'
import {useCounter} from "../useCounter"
const Service = () => {
    const {count,increament,decreament,reset}=useCounter();
  return (
    <div>
        <h1> custom hook</h1>
        <h3> count:{count}</h3>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>+</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Service;