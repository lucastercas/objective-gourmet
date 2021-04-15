import { State } from "../model/State";
import { TreeNode } from "../model/TreeNode";

export function reducer(state: State, action: any): State {
  switch (action.type) {
    case "restart":
      if (state.win) {
        return {
          ...state,
          currentNode: state.rootNode,
          win: false,
          lose: false,
        };
      } else {
        const newTrait = new TreeNode(action.payload.trait, false);
        const newFood = new TreeNode(action.payload.name, true);
        newTrait.setLeft(newFood);
        newTrait.setRight(state.currentNode);
        newFood.setParent(newTrait);
        state.currentNode.addNode(newTrait);
        return {
          ...state,
          win: false,
          lose: false,
          currentNode: state.rootNode,
        };
      }

    case "yes":
      if (state.currentNode.isDish) {
        return { ...state, win: true };
      } else {
        return {
          ...state,
          currentNode: state.currentNode.left!,
        };
      }

    case "no":
      if (state.currentNode.isDish) {
        return { ...state, lose: true };
      } else {
        return { ...state, currentNode: state.currentNode.right! };
      }
    default:
      throw new Error();
  }
}
