import React, { useReducer } from "react";
import { init, reducer } from "../../provider/reducer";
import WinDialog from "../WinDialog/WinDialog";

interface IProps {
  initialCount: number;
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);

  return (
    <div>
      <WinDialog
        open={state.win}
        click={() => dispatch({ type: "restart" })}
        node={state.currentNode}
      />
      <p>Pense em um prato que gosta!</p>
      <p>O prato que voce pensou eh {state.currentNode.name}?</p>
      <button onClick={() => dispatch({ type: "yes" })}>Sim</button>
      <button onClick={() => dispatch({ type: "no" })}>Nao</button>
    </div>
  );
};

export default Counter;
