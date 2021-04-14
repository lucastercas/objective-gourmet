export interface TreeNode {
  name: String;
  left?: TreeNode;
  right?: TreeNode;
}

export interface Tree {
  currentNode: TreeNode;
  rootNode: TreeNode;
  win: boolean
  lose: boolean
}
