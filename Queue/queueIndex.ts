import Queue from './Queue.js';

let testQueue = new Queue(3);
testQueue.enqueue('Node_1');
testQueue.enqueue('Node_2');
// testQueue.enqueue('Node_3');
try {
  testQueue.enqueue('Node_4');
} catch (e) {
  console.log('this produced an error');
}
// testQueue.dequeue();
// testQueue.dequeue();
// testQueue.dequeue();
// try {
//   testQueue.dequeue();
// } catch (e) {
//   console.log('this produced an error');
// }

testQueue.peek();
