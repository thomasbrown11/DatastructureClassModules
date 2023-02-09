"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryTree {
    constructor(data, depth = 1) {
        this.data = data;
        this.depth = depth;
        this.left = null;
        this.right = null;
    }
}
const bt = new BinaryTree(15);
console.log(bt);
exports.default = BinaryTree;
