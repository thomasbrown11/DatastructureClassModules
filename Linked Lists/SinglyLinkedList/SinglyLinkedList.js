"use strict";
//This is a singly linked list that traverses is uni-directional and sequentially ordered. 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Node module required to work. Reference module via Node variable. 
const Node_js_1 = __importDefault(require("./Node.js"));
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    //add a new Node to head of list
    addToHead(data) {
        const newHead = new Node_js_1.default(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.link = currentHead;
        }
    }
    //add a new Node to end of the list
    addToTail(data) {
        let tail = this.head;
        if (!tail) {
            this.head = new Node_js_1.default(data);
        }
        else {
            while (tail.link) {
                tail = tail.link;
            }
            tail.link = new Node_js_1.default(data);
        }
    }
    //remove first Node in list
    removeHead() {
        if (!this.head) {
            return;
        }
        let removedHead = this.head;
        this.head = removedHead.link;
        if (this.head) {
            return this.head.data;
        }
    }
    //remove last Node in list
    removeTail() {
        //if list empty
        if (!this.head) {
            return;
        }
        ;
        let currentHead = this.head;
        let prevHead = this.head;
        //if list only one Node long
        if (!this.head.link) {
            this.head = null;
            return;
        }
        //loop through list setting current Node to prevHead, linked Node to currentHead
        while (currentHead.link) {
            prevHead = currentHead;
            currentHead = currentHead.link;
        }
        //remove penultimate node link to remove final node
        prevHead.link = null;
    }
    swapNodes(data1, data2) {
        if (data1 === data2) {
            return console.log('No need to swap identical elements');
        }
        let node1 = this.head;
        let node2 = this.head;
        let node1prev = null; //set to null incase node1 is head.. breaks while loop before var change
        let node2prev = null; //set to null incase node2 is head.. breaks while loop before var change
        //populate variables 
        while (node1) {
            if (node1.data === data1) {
                break;
            }
            node1prev = node1;
            node1 = node1.link;
        }
        while (node2) {
            if (node2.data === data2) {
                break;
            }
            node2prev = node2;
            node2 = node2.link;
        }
        //stop if no matches 
        if (!node1 || !node2) {
            return console.log('One or both elements did not match input arguments'); //break method if no matches (node1/2 will be null if while loop completes)
        }
        //update lists' head props or update prev Node's pointers (remember Nodes only have a link pointer)
        if (!node1prev) { //if node1 was head make node2 head since they are being swapped.
            this.head = node2;
        }
        else {
            node1prev.link = node2; //if node1 not head then change previous node's pointer to the swapped node (only step 1)
        }
        if (!node2prev) {
            this.head = node1; //if node2prev null then node2 was head, set swapped node as head instead
        }
        else {
            node2prev.link = node1; //if not head link node2's previous node to the swapped element instead
        }
        //update node1/node2 props (link pointer).. just swap current values
        let tempVar = node1.link;
        node1.link = node2.link;
        node2.link = tempVar;
        //testing
        console.log(`node 1 ${node1.data}, node1prev ${node1prev}, node2 ${node2.data}, node2prev ${node2prev.data}`);
    }
    //seems to choose which is nth number from the end? like n = 1 returned last node, n = 2 returned 2nd to last
    //why did 3 (on a 3 node list) return null instead of head node? 
    //as coded will never return head node since current will be change to head and then immediately
    //change to current's link node after if conditional.
    //This will only start changing current var after n times, and will always start as head 
    //and then link on first iteration. 
    //so if nthLastNode(2) passed then it only starts on 3rd iteration making current head 
    //and then Node 2. If there's 4 in list there'll be one more iteration and current will update to 
    //Node 3. It will be the 2 from last? as in last then 2. 
    //The flaw here is nthLastNode(1) will always be null so a 1 node list can never return anything
    //other than null. Also nthLastNode(4) on a 4 node list will be null, even though tail 3 2 1 (4).. 
    //why doesn't it return the head? Could just error handle with an if statement  
    nthLastNode(n) {
        let current = null;
        let tailSeeker = this.head;
        let count = 0;
        while (tailSeeker) {
            tailSeeker = tailSeeker.link;
            console.log(`tailSeeker ${tailSeeker} `);
            if (count >= n) {
                if (!current) {
                    current = this.head;
                    console.log(`current ${current} `);
                }
                current = current.link;
                console.log(`current ${current} `);
            }
            count++;
            console.log(`count ${count} `);
        }
        return current;
    }
    // public findMiddle(): Node | null {
    //   let fastIter: Node | null = this.head;
    //   let slowIter: Node | null = this.head;
    //   let count: number = 0;
    //   while (fastIter) {
    //     fastIter = fastIter.link;
    //     if (count % 2 !== 0) { //if count value not even
    //       slowIter = slowIter.link;
    //     }
    //     count++;
    //   }
    //   return slowIter;
    // }
    //runner technique to find mid
    findMiddle() {
        let fastIterator = this.head; //iterate twice per while loop iteration
        let slowItertor = this.head; //iterate at half speed to get halfway through list
        let secondNode = this.head.link; // used to skip first slowIterator iteration
        while (fastIterator) { //while there's still Nodes
            fastIterator = fastIterator.link; //move up one node
            if (fastIterator != secondNode) { //if not the first loop (fastIt will be node 3 at end of 1st loop)
                slowItertor = slowItertor.link; //increment up one Node, saved to different variable
            }
            if (fastIterator) { //if still not null
                fastIterator = fastIterator.link; //move to next node again before loop breaks
            }
        }
        return slowItertor; //return iterator that's moved half speed
    }
    findNodeRecursively(data, currentNode = this.head) {
        if (!currentNode) {
            return null;
        }
        else if (currentNode.data === data) {
            return currentNode;
        }
        else {
            return this.findNodeRecursively(data, currentNode.link);
        }
    }
    rotate(k) {
        let count = 1;
        // let fastIter: Node | null = this.head;
        while (count <= k) {
            let removedHead = this.head;
            this.removeHead();
            this.addToTail(removedHead.data);
            count++;
        }
    }
    //print data in list sequentially
    printList() {
        let currentHead = this.head;
        let output = "<head> ";
        while (currentHead) {
            output += `${currentHead.data} `;
            currentHead = currentHead.link;
        }
        output += '<tail>';
        console.log(output);
    }
}
exports.default = SinglyLinkedList;
