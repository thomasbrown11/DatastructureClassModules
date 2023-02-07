class TreeNode {
  private data: any;
  private children: any[];
  constructor(data: any) {
    this.data = data;
    this.children = [];
  }

  public addChild(child: any): void {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  //time complexity is awful.. at least O(n^2). Space complexity constant. ß 
  public removeChild(childToRemove: any): void {
    const length: number = this.children.length;
    //save a filtered children array as children array value
    this.children = this.children.filter(child => {
      //if argument is tree node 
      if (childToRemove instanceof TreeNode) {
        //return true if argument node doesn't match current child node. True means remove from returned array
        return childToRemove !== child;
      } else {
        //if argument is not tree node return true childToRemove doesn't equal current child node's data
        //true removes from the returned array
        return childToRemove !== child.data;
      }
    });

    //if the length of child prop array hasn't changed (child of root not removed)
    if (this.children.length === length) {
      //for each child node in array 
      this.children.forEach(child => {
        //recursively call removeChild with original 'childToRemove' argument on all children..
        //this will continue down all levels of the tree until there's a match... seems like it could trigger infinite loop.
        child.removeChild(childToRemove);
      });
    }
  }
}

const tree = new TreeNode(1);
// console.log(tree);

tree.addChild(6)
let node = new TreeNode(7);
tree.addChild(node);

console.log(tree);
// tree.removeChild(6);
// console.log(tree);

tree.removeChild(node)
console.log(tree)

tree.removeChild(70);
console.log(tree);