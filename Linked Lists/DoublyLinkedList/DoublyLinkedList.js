"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Doubly linked list for bi-directional traversal. Adds a previous property to class object
const BiDirectNode_js_1 = __importDefault(require("./BiDirectNode.js"));
class DoublyLinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }
    addToHead(data) {
        const newHead = new BiDirectNode_js_1.default(data);
        const currentHead = this._head;
        if (currentHead) {
            currentHead.prev = newHead;
            newHead.link = currentHead;
        }
        this._head = newHead;
        if (!this._tail) {
            this._tail = newHead;
        }
    }
    addToTail(data) {
        const newTail = new BiDirectNode_js_1.default(data);
        const currentTail = this._tail;
        if (currentTail) {
            currentTail.link = newTail;
            newTail.prev = currentTail;
        }
        this._tail = newTail;
        if (!this._head) {
            this._head = newTail;
        }
    }
    removeHead() {
        const removedHead = this._head;
        if (!removedHead) { //if empty list return
            return;
        }
        this._head = removedHead.link; //this will make head null if only one node on method call
        if (this._head) { //if head not null
            this._head.prev = null; //orphans old head
        }
        if (removedHead === this._tail) { //if old head was also tail (there was only one node)
            //this._tail = null; //may need to remove later? tutorial uses a method here
            this.removeTail(); //this makes _tail null since it's an empty list
        }
        return removedHead.data; //return the head that was removed for end user 
    }
    removeTail() {
        const removedTail = this._tail;
        if (!removedTail) { //if empty list then return
            return;
        }
        this._tail = removedTail.prev; //make old tail's prev Node new tail
        if (this._tail) { //if there is a new tail (there was more than one Node total so prev had value)
            this._tail.link = null; //orphan old tail
        }
        if (removedTail === this._head) { //if there was only one Node so head was also tail 
            this.removeHead(); //basically make this._head null;
        }
        return removedTail.data; //return data of old tail for info
    }
    //print data in list sequentially
    printList() {
        let currentHead = this._head;
        let output = "<head> ";
        while (currentHead) {
            output += `${currentHead.data} `;
            currentHead = currentHead.link;
        }
        output += '<tail>';
        console.log(output);
    }
}
exports.default = DoublyLinkedList;
