//This is a hashmap implementation using separate chaining. In this particular example a linked list
//is used as the underlying datastructure in each hash bucket. LL refers to linked lists.

import Node from '../Linked\ Lists/SinglyLinkedList/Node';
import SinglyLinkedList from '../Linked Lists/SinglyLinkedList/SinglyLinkedList';

class LLHashMap {
  hashmap: null[] | any[];

  constructor(size: number = 0) {
    //instantiate each element in hashmap array with a linked list
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
    this.hashmap[arrayIndex] = value;
  }

  public retrieve(key: string): any {
    const arrayIndex: number = this.hash(key);
    return this.hashmap[arrayIndex];
  }

}

export default LLHashMap;