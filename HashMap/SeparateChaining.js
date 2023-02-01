"use strict";
//This is a hashmap implementation using separate chaining. In this particular example a linked list
//is used as the underlying datastructure in each hash bucket. LL refers to linked lists.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SinglyLinkedList_1 = __importDefault(require("../Linked Lists/SinglyLinkedList/SinglyLinkedList"));
class LLHashMap {
    constructor(size = 0) {
        //instantiate each element in hashmap array with a linked list
        this.hashmap = new Array(size).fill(null).map(() => new SinglyLinkedList_1.default());
    }
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += (key.charCodeAt(i) + hashCode);
        }
        return hashCode % this.hashmap.length;
    }
    assign(key, value) {
        const arrayIndex = this.hash(key);
        this.hashmap[arrayIndex] = value;
    }
    retrieve(key) {
        const arrayIndex = this.hash(key);
        return this.hashmap[arrayIndex];
    }
}
exports.default = LLHashMap;
