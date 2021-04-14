import { Tree } from "./Tree";

interface IAction {
  type: string;
  payload?: number
}

export function reducer(state: Tree, action: IAction): Tree {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);
    default:
      throw new Error();
  }
}

export function init(initialCount: number) {
  return { count: initialCount };
}
