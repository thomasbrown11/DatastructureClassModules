import SinglyLinkedList from "../Linked Lists/SinglyLinkedList/SinglyLinkedList";

class Stack {
  private stack: SinglyLinkedList;
  private size: number;
  private maxSize: number;

  constructor(maxSize = Infinity) {
    this.stack = new SinglyLinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  public hasRoom(): boolean {
    return this.size < this.maxSize;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

  public push(data: any) {
    if (this.hasRoom()) {
      this.stack.addToHead(data);
      this.size++;
    } else {
      throw new Error('The Stack is full');
    }
  }

  public pop() {
    if (!this.isEmpty()) {
      let removedHead: Node | null = this.stack.removeHead();
      this.size -= 1;
      return removedHead;
    } else {
      throw new Error('The Stack is empty');
    }
  }

}

export default Stack;