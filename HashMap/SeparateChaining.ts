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
    }
  }

  public retrieve(key: string): any {
    const arrayIndex: number = this.hash(key);
    return this.hashmap[arrayIndex];
  }

}

const testMap = new LLHashMap(10);
// console.log(testMap);

testMap.assign('hello', 'kitty')
// console.log(testMap);
console.log(testMap.retrieve('hello'));

export default LLHashMap;