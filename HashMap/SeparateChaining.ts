//This is a hashmap implementation using separate chaining. In this particular example a linked list
//is used as the underlying datastructure in each hash bucket. LL refers to linked lists.

import Node from '../Linked\ Lists/SinglyLinkedList/Node';
import SinglyLinkedList from '../Linked Lists/SinglyLinkedList/SinglyLinkedList';

class LLHashMap {
  hashmap: null[] | SinglyLinkedList[];

  constructor(size: number = 0) {
    this.hashmap = new Array(size).fill(null);
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
    let linkedList: null | SinglyLinkedList = this.hashmap[arrayIndex];
    if (linkedList === null) {
      linkedList = new SinglyLinkedList();
      linkedList.addToHead({ key, value });
      // console.log(linkedList)
      this.hashmap[arrayIndex] = linkedList; //linkedList doesn't references actual hashmap so specify
    } else {
      let currentNode: Node | null = linkedList.head; //equals head
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
      }
    }
  }

  public retrieve(key: string): any {
    const arrayIndex: number = this.hash(key);
    let currentNode: Node | null = this.hashmap[arrayIndex].head;
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
  public deleteNode(key: string, value: any): Node | string {
    const arrayIndex: number = this.hash(key);
    let linkedList: null | SinglyLinkedList = this.hashmap[arrayIndex];
    if (!linkedList) {
      return 'there are no values in the hash bucket';
    }
    let currentNode: null | Node = linkedList.head
    let prevNode: null | Node = currentNode;
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
        return currentNode //return the removed Node
      }
      prevNode = currentNode;
      currentNode = currentNode.link;
    }
    return 'Node not found in hash bucket';
  }
  //clear any bucket with the desired key 
  public clearBucket(key: string): SinglyLinkedList | string {
    const arrayIndex: number = this.hash(key);
    let linkedList: null | SinglyLinkedList = this.hashmap[arrayIndex];
    if (linkedList) {
      this.hashmap[arrayIndex] = null;
      return linkedList;
    }
    return 'No values found at requested key';
  }
}

export default LLHashMap;