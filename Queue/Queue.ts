import SinglyLinkedList from '../Linked Lists/SinglyLinkedList/SinglyLinkedList.js';

//make bounded Queue by adding maxSize argument on object instantiation;

class Queue {
  private queue: SinglyLinkedList;
  private size: number;
  private maxSize: number;

  constructor(maxSize = Infinity) {
    this.queue = new SinglyLinkedList()
    this.size = 0;
    this.maxSize = maxSize;
  }

  public peek() {
    console.log(this.queue.head.data); //should this be tail instead? head is what exits first
  }

  // public hasRoom(): boolean {
  //   if (this.size < this.maxSize) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  public hasRoom(): boolean {
    return this.size < this.maxSize;
  }

  // public isEmpty(): boolean {
  //   if (this.size === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public enqueue(data: any) {
    if (this.hasRoom() == true) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data}. Queue size is ${this.size}`)
      return data;
    } else {
      throw new Error('Queue is full!');
    }
  }

  public dequeue() {
    if (this.isEmpty() == false) {
      const data: Node | null = this.queue.removeHead();
      this.size -= 1;
      console.log(`Removed ${data}. Queue size is ${this.size}`);
      return data;
    } else {
      throw new Error('The Queue is empty.');
    }
  }
}

export default Queue;