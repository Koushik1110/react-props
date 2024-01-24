import { useState } from "react";

const Counter = ({count, setCount}) => {
  

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <div>
        <button onClick={handleDecrease}>-</button>
        <button onClick={handleIncrease}>+</button>
      </div>
    </div>
  );
};

export default Counter;
