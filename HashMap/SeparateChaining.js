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
        // this.hashmap = new Array(size).fill(null).map(() => new SinglyLinkedList()); //UNCOMMENT AND DELETE IF FAIL
        this.hashmap = new Array(size).fill(null);
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
        //you could just instantiate a new list inside an if statement DELETE IF FAIL
        let linkedList = this.hashmap[arrayIndex];
        if (linkedList === null) {
            linkedList = new SinglyLinkedList_1.default();
            linkedList.addToHead({ key, value });
            // console.log(linkedList)
            this.hashmap[arrayIndex] = linkedList; //linkedList no longer references actual hashmap so specify
            // console.log(this.hashmap[arrayIndex]);
            // }
            // const linkedList: SinglyLinkedList = this.hashmap[arrayIndex]; already up above but can change placement if fail
            //if the head is empty then make the desired key value pair the head node (as an object)
            // if (linkedList.head === null) {
            // linkedList.addToHead({ key, value });
            // return;
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
            // console.log(currentNode) //print loop
            //if the key matches then return the value... rememeber value will be overwritten in matching key case from assign()
            if (currentNode.data.key === key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.link;
        }
        //if no matches
        return null;
    }
    //delete specific Node from any hash bucket at any location. 
    deleteNode(key, value) {
        const arrayIndex = this.hash(key);
        let linkedList = this.hashmap[arrayIndex];
        if (!linkedList) {
            return 'there are no values in the hash bucket';
        }
        let currentNode = linkedList.head;
        let prevNode = currentNode;
        //if bucket has only one item return to null
        if (linkedList.head.data.value === value && !linkedList.head.link) {
            this.hashmap[arrayIndex] = null;
            return currentNode; // return removed Node
        }
        //if value is the head then delete head
        if (linkedList.head.data.value === value) {
            linkedList.removeHead();
            return currentNode; // return removed Node
        }
        while (currentNode) {
            if (currentNode.data.value === value) {
                prevNode.link = currentNode.link;
                return currentNode; //return the removed Node
            }
            prevNode = currentNode;
            currentNode = currentNode.link;
        }
        return 'Node not found in hash bucket';
    }
    //clear any bucket with the desired key 
    clearBucket(key) {
        const arrayIndex = this.hash(key);
        let linkedList = this.hashmap[arrayIndex];
        if (linkedList) {
            this.hashmap[arrayIndex] = null;
            return linkedList;
        }
    }
}
const testMap = new LLHashMap(10);
// console.log(testMap);
// console.log(testMap.hash('hello'))
// console.log(testMap.hash('mello'))
testMap.assign('hello', 'kitty');
// console.log(testMap);
// console.log(testMap.hashmap[1])
testMap.assign('mello', 'schmitty');
console.log(testMap.hashmap);
// console.log(testMap.deleteNode('hello', 'kitty'));
// console.log(testMap.deleteNode('hello', 'pity'))
// console.log(testMap.deleteNode('elbow', 'city'));
// console.log(testMap.hashmap[1].head)
testMap.assign('yellow', 'witty');
console.log(testMap.hashmap);
// console.log(testMap.deleteNode('yellow', 'witty'));
console.log(testMap.clearBucket('yellow'));
console.log(testMap.hashmap);
exports.default = LLHashMap;
