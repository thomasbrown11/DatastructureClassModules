"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SinglyLinkedList_js_1 = __importDefault(require("../Linked Lists/SinglyLinkedList/SinglyLinkedList.js"));
//make bounded Queue by adding maxSize argument on object instantiation;
class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new SinglyLinkedList_js_1.default();
        this.size = 0;
        this.maxSize = maxSize;
    }
    peek() {
        console.log(this.queue.head.data); //should this be tail instead? head is what exits first
    }
    // public hasRoom(): boolean {
    //   if (this.size < this.maxSize) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    hasRoom() {
        return this.size < this.maxSize;
    }
    // public isEmpty(): boolean {
    //   if (this.size === 0) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    isEmpty() {
        return this.size === 0;
    }
    enqueue(data) {
        if (this.hasRoom() == true) {
            this.queue.addToTail(data);
            this.size++;
            console.log(`Added ${data}. Queue size is ${this.size}`);
            return data;
        }
        else {
            throw new Error('Queue is full!');
        }
    }
    dequeue() {
        if (this.isEmpty() == false) {
            const data = this.queue.removeHead();
            this.size -= 1;
            console.log(`Removed ${data}. Queue size is ${this.size}`);
            return data;
        }
        else {
            throw new Error('The Queue is empty.');
        }
    }
}
exports.default = Queue;
