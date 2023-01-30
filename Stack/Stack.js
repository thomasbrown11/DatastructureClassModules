"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SinglyLinkedList_1 = __importDefault(require("../Linked Lists/SinglyLinkedList/SinglyLinkedList"));
class Stack {
    constructor(maxSize = Infinity) {
        this.stack = new SinglyLinkedList_1.default();
        this.size = 0;
        this.maxSize = maxSize;
    }
    hasRoom() {
        return this.size < this.maxSize;
    }
    isEmpty() {
        return this.size === 0;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.stack.head.data;
        }
        else {
            return null;
        }
    }
    push(data) {
        if (this.hasRoom()) {
            this.stack.addToHead(data);
            this.size++;
        }
        else {
            throw new Error('The Stack is full');
        }
    }
    pop() {
        if (!this.isEmpty()) {
            let removedHead = this.stack.removeHead();
            this.size -= 1;
            return removedHead;
        }
        else {
            throw new Error('The Stack is empty');
        }
    }
}
exports.default = Stack;
