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
    //returning null means that all preceding recursive calls to method will return null back and null will be the final value passed
    //when clearing the stack
    recursiveRetrieve(data) {
        if (data === this.data) { //base case
            return this;
        }
        else if (data < this.data && this.left) { //if value is less and left property exists
            this.left.recursiveRetrieve(data); //attempt retrieval from left
        }
        else if (data > this.data && this.right) { //if more than right and right exists
            this.right.recursiveRetrieve(data); //attempt retrieval from right
        }
        else {
            return null;
        }
    }
    retrieve(data) {
        let currentNode = this.data;
        while (data !== currentNode.data) {
            if (data < currentNode.data && currentNode.left) {
                currentNode = currentNode.left;
            }
            else if (data < currentNode.data && !currentNode.left) {
                return null;
            }
            if (data > currentNode.data && currentNode.right) {
                currentNode = currentNode.right;
            }
            else if (data > currentNode.data && !currentNode.right) {
                return null;
            }
            return currentNode;
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
