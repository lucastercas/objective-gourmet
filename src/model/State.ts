import { TreeNode } from "./TreeNode";

export interface State {
  currentNode: TreeNode;
  rootNode: TreeNode;
  win: boolean;
  lose: boolean;
}
