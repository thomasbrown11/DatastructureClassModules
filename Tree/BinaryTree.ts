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
}

const bt = new BinaryTree(15);
console.log(bt)

export default BinaryTree;