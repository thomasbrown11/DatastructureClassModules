"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Node from './Node.js';
const SinglyLinkedList_js_1 = __importDefault(require("./SinglyLinkedList.js"));
const testList = new SinglyLinkedList_js_1.default();
testList.addToHead('node_a');
testList.addToTail('node_b');
testList.addToTail('node_c');
testList.addToTail('node_d');
testList.addToTail('node_e');
// testList.printList();
// testList.swapNodes('node_c', 'node_b');
// console.log(testList.nthLastNode(1));
// console.log(testList.findMiddle());
// testList.rotate(3);
// testList.printList()
console.log(testList.findNodeRecursively('node_a'));
