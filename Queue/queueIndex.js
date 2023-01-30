"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_js_1 = __importDefault(require("./Queue.js"));
let testQueue = new Queue_js_1.default(3);
testQueue.enqueue('Node_1');
testQueue.enqueue('Node_2');
// testQueue.enqueue('Node_3');
try {
    testQueue.enqueue('Node_4');
}
catch (e) {
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
