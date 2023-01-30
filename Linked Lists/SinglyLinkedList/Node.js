"use strict";
//this is a standard node for singly and doubly linked lists with retrieval/update methods
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data) {
        this._data = data;
        this._link = null;
    }
    //print the next Node in list
    get link() {
        return this._link;
    }
    //print data of current Node
    get data() {
        return this._data;
    }
    //make new Node.. pass new Node as argument to preserved list integrity
    set link(node) {
        if (node instanceof Node || node === null) {
            this._link = node;
        }
        else {
            throw new Error('This is not a node');
        }
    }
    //change data of current Node
    set data(x) {
        this._data = x;
    }
}
exports.default = Node;
