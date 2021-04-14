import { Tree, TreeNode } from "./Tree";

interface IAction {
  type: string;
  payload?: number;
}

export function reducer(state: Tree, action: any): Tree {
  switch (action.type) {
    case "restart":
      console.log("restart");
      return {
        ...state,
        currentNode: state.rootNode,
        win: false,
        lose: false,
      };
    case "yes":
      console.log("yes");
      return {
        ...state,
        win: true,
      };

    case "no":
      console.log("no");
      if (state.currentNode.left) {
        return {
          ...state,
          currentNode: state.currentNode.left,
        };
      } else {
        const newNode: TreeNode = {
          name: "New Node Left",
        };
        return {
          ...state,
          currentNode: newNode,
        };
      }
    default:
      throw new Error();
  }
}

export function init(initialCount: number): Tree {
  const newNode: TreeNode = {
    name: "Massa",
    left: {
      name: "Bolo de Chocolate",
    },
    right: {
      name: "Lasanha",
    },
  };
  return {
    currentNode: newNode,
    rootNode: newNode,
    win: false,
    lose: false,
  };
}
