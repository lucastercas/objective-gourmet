import React, { useReducer } from "react";
import { State } from "../../model/State";
import { TreeNode } from "../../model/TreeNode";
import { reducer } from "../../provider/reducer";
import LoseDialog from "../LoseDialog/LoseDialog";
import WinDialog from "../WinDialog/WinDialog";

function init(): State {
  const rootNode = new TreeNode("massa", false);

  const leftNode = new TreeNode("Lasanha", true);
  leftNode.setParent(rootNode);
  rootNode.setLeft(leftNode);

  const rightNode = new TreeNode("Bolo de Chocolate", true);
  rightNode.setParent(rootNode);
  rootNode.setRight(rightNode);

  return {
    currentNode: rootNode,
    rootNode: rootNode,
    win: false,
    lose: false,
  };
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
      <LoseDialog open={state.lose} click={dispatch} />
      <p>Pense em um prato que gosta!</p>
      <p>O prato que voce pensou é {state.currentNode.name}?</p>
      <button onClick={() => dispatch({ type: "yes" })}>Sim</button>
      <button onClick={() => dispatch({ type: "no" })}>Nao</button>
    </div>
  );
};

export default Counter;
