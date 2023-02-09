class BinaryTree {
  data: any;
  depth: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(data: any, depth = 1) {
    this.data = data;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  //insert at right or left based on comparison to this.data, call recursively to traverse down to nearest empty node
  //will do nothing if value matches current value in binary tree
  public insert(data: number): void {
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new BinaryTree(data, (this.depth + 1));
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new BinaryTree(data, (this.depth + 1));
      }
    }
  }
}

const bt = new BinaryTree(15);
console.log(bt)

bt.insert(3);
bt.insert(20);
bt.insert(5);
console.log(bt)

export default BinaryTree;