"use strict";
//this builds on the singly linked node with an extra _prev property for bi-directional traversal
//it also adds setters and getters for this new _prev property 
Object.defineProperty(exports, "__esModule", { value: true });
class BiDirectNode {
    constructor(data) {
        this._data = data;
        this._link = null;
        this._prev = null;
    }
    //print the next Node in list
    get link() {
        return this._link;
    }
    //print the previous Node in list
    get prev() {
        return this._prev;
    }
    //print data of current Node
    get data() {
        return this._data;
    }
    //make new next Node.. pass new Node as argument to preserved list integrity
    set link(node) {
        if (node instanceof BiDirectNode || node === null) {
            this._link = node;
        }
        else {
            throw new Error('This is not a node');
        }
    }
    //make new previous node 
    set prev(node) {
        if (node instanceof BiDirectNode || node === null) {
            this._prev = node;
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
exports.default = BiDirectNode;
