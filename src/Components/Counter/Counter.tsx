import React, { useReducer } from "react";
import { init, reducer } from "../../provider/reducer";

interface IProps {
  initialCount: number;
}

const Counter = ({ initialCount }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};

export default Counter;
