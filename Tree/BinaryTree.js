"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryTree {
    constructor(data, depth = 1) {
        this.data = data;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }
    //insert at right or left based on comparison to this.data, call recursively to traverse down to nearest empty node
    //will do nothing if value matches current value in binary tree
    insert(data) {
        if (data < this.data) {
            if (this.left) {
                this.left.insert(data);
            }
            else {
                this.left = new BinaryTree(data, (this.depth + 1));
            }
        }
        else {
            if (this.right) {
                this.right.insert(data);
            }
            else {
                this.right = new BinaryTree(data, (this.depth + 1));
            }
        }
    }
}
const bt = new BinaryTree(15);
console.log(bt);
bt.insert(3);
bt.insert(20);
bt.insert(5);
console.log(bt);
exports.default = BinaryTree;
