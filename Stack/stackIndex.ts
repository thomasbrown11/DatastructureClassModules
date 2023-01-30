import Stack from './Stack.js';

let testStack = new Stack(3);

testStack.push('1');
testStack.push('2')

console.log(testStack.peek()); // returns only data of head node

testStack.push('3');

//error handle stack where the method call would cause overflow. 
try {
  testStack.push('4');
} catch (e) {
  console.log(e);
}