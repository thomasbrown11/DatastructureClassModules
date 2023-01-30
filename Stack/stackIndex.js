"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_js_1 = __importDefault(require("./Stack.js"));
let testStack = new Stack_js_1.default(3);
testStack.push('1');
testStack.push('2');
console.log(testStack.peek()); // returns only data of head node
testStack.push('3');
//error handle stack where the method call would cause overflow. 
try {
    testStack.push('4');
}
catch (e) {
    console.log(e);
}
