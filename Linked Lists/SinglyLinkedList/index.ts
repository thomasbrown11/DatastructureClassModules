// import Node from './Node.js';
import SinglyLinkedList from './SinglyLinkedList.js';

const testList = new SinglyLinkedList();
testList.addToHead('node_a');
testList.addToTail('node_b');
testList.addToTail('node_c');
testList.addToTail('node_d');
testList.addToTail('node_e');

// testList.printList();

// testList.swapNodes('node_c', 'node_b');
// console.log(testList.nthLastNode(1));
// console.log(testList.findMiddle());
// testList.rotate(3);
// testList.printList()

console.log(testList.findNodeRecursively('node_a'));