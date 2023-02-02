"use strict";
//This is a hashmap implementation using separate chaining. In this particular example a linked list
//is used as the underlying datastructure in each hash bucket. LL refers to linked lists.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("../Linked Lists/SinglyLinkedList/Node"));
const SinglyLinkedList_1 = __importDefault(require("../Linked Lists/SinglyLinkedList/SinglyLinkedList"));
class LLHashMap {
    constructor(size = 0) {
        //instantiate each element in hashmap array with a linked list
        //cc solution
        // this.hashmap = new Array(size).fill(null).map(() => new SinglyLinkedList());
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
        //you could just instantiate a new list inside an if statement 
        // if (this.hashmap[arrayIndex] = null) {
        //   this.hashmap[arrayIndex] = new SinglyLinkedList();
        //   this.hashmap[arrayIndex].addToHead(value);
        // }
        const linkedList = this.hashmap[arrayIndex];
        //if the head is empty then make the desired key value pair the head node (as an object)
        if (linkedList.head === null) {
            linkedList.addToHead({ key, value });
            return;
        }
        else {
            let currentNode = linkedList.head; //equals head
            //while there is a current node (will iterate by making the node its link)
            while (currentNode) {
                //if they parameter key matches current node data key
                if (currentNode.data.key === key) {
                    //overwrite the value (since key will obviously be the same) 
                    currentNode.data.value = value;
                    //break loop by returning the updated node
                    return currentNode.data;
                }
                if (!currentNode.link) { //if there's no next node then make new node with parameter key,value as data and pass as tail node
                    currentNode.link = new Node_1.default({ key, value });
                }
                //iterate to next node in linked list
                currentNode = currentNode.link;
            }
        }
    }
    retrieve(key) {
        const arrayIndex = this.hash(key);
        let currentNode = this.hashmap[arrayIndex].head;
        while (currentNode) {
            //if the key matches then return the value... rememeber value will be overwritten in matching key case from assign()
            if (currentNode.data.key === key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.link;
        }
        //if no matches
        return null;
    }
}
const testMap = new LLHashMap(10);
// console.log(testMap);
console.log(testMap.hash('hello'));
console.log(testMap.hash('mello'));
testMap.assign('hello', 'kitty');
// console.log(testMap);
testMap.assign('mello', 'schmitty');
console.log(testMap.retrieve('mello'));
// console.log(testMap.hashmap)
exports.default = LLHashMap;
