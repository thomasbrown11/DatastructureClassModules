//This is a hashmap implementation using separate chaining. In this particular example a linked list
//is used as the underlying datastructure in each hash bucket. LL refers to linked lists.

import Node from '../Linked\ Lists/SinglyLinkedList/Node';
import SinglyLinkedList from '../Linked Lists/SinglyLinkedList/SinglyLinkedList';

class LLHashMap {
  hashmap: null[] | any[];

  constructor(size: number = 0) {
    //instantiate each element in hashmap array with a linked list

    //cc solution
    // this.hashmap = new Array(size).fill(null).map(() => new SinglyLinkedList());
    this.hashmap = new Array(size).fill(null).map(() => new SinglyLinkedList());
  }

  public hash(key: string): number {
    let hashCode: number = 0;
    for (let i: number = 0; i < key.length; i++) {
      hashCode += (key.charCodeAt(i) + hashCode);
    }
    return hashCode % this.hashmap.length;
  }

  public assign(key: string, value: any): void {
    const arrayIndex: number = this.hash(key);
    //you could just instantiate a new list inside an if statement 
    // if (this.hashmap[arrayIndex] = null) {
    //   this.hashmap[arrayIndex] = new SinglyLinkedList();
    //   this.hashmap[arrayIndex].addToHead(value);
    // }
    const linkedList: SinglyLinkedList = this.hashmap[arrayIndex];
    //if the head is empty then make the desired key value pair the head node (as an object)
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    } else {
      //CHECK WORK (works based on testing.. update retrieve?)**************
      let currentNode: Node = linkedList.head; //equals head
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
          currentNode.link = new Node({ key, value });
        }
        //iterate to next node in linked list
        currentNode = currentNode.link;
        //********************** */
      }
    }
  }

  public retrieve(key: string): any {
    const arrayIndex: number = this.hash(key);
    // return this.hashmap[arrayIndex]; //commented to experiment building out
    //CHECK WORK**** (works in testing)
    const indexList: SinglyLinkedList | null = this.hashmap[arrayIndex];
    if (indexList.head.data.key === key) {
      return indexList.head.data.value;
    } else {
      let currentNode: Node | null = indexList.head;
      while (currentNode) {
        if (currentNode.data.key === key) {
          return currentNode.data.value;
        }
        currentNode = currentNode.link;
      }
    }
    //**************************** */
  }

}

const testMap = new LLHashMap(10);
// console.log(testMap);
console.log(testMap.hash('hello'))
console.log(testMap.hash('mello'))
testMap.assign('hello', 'kitty')
// console.log(testMap);
testMap.assign('mello', 'schmitty')


console.log(testMap.retrieve('mello'));
// console.log(testMap.hashmap)
export default LLHashMap;