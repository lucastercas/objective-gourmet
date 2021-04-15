export class TreeNode {
  private _left?: TreeNode;
  private _right?: TreeNode;
  private _parent?: TreeNode;

  constructor(protected _name: string, protected _isDish: boolean) {}

  public get name(): string {
    return this._name;
  }

  public get isDish(): boolean {
    return this._isDish;
  }

  public get left() {
    return this._left;
  }
  public setLeft(value: TreeNode) {
    this._left = value;
  }

  public get right() {
    return this._right;
  }
  public setRight(value: TreeNode) {
    this._right = value;
  }

  public get parent() {
    return this._parent;
  }
  public setParent(value: TreeNode) {
    this._parent = value;
  }

  public addNode(newTrait: TreeNode) {
    if (this._parent!.left === this) {
      this._parent!.setLeft(newTrait);
    } else {
      this._parent!.setRight(newTrait);
    }
    this._parent = newTrait
  }
}
