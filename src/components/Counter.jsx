// src/components/Counter.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  return (
    <div className="counter-component text-center py-8">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <div className="space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
