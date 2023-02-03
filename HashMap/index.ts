import LLHashMap from "./SeparateChaining";

const testMap = new LLHashMap(10);
console.log(testMap);
console.log(testMap.hash('hello'))
console.log(testMap.hash('mello'))
testMap.assign('hello', 'kitty')
console.log(testMap);
console.log(testMap.hashmap[1])

testMap.assign('mello', 'schmitty')
console.log(testMap.hashmap)
console.log(testMap.deleteNode('hello', 'kitty'));
console.log(testMap.deleteNode('hello', 'pity'))
console.log(testMap.deleteNode('elbow', 'city'));
console.log(testMap.hashmap[1].head)

testMap.assign('yellow', 'witty');
console.log(testMap.hashmap);
console.log(testMap.deleteNode('yellow', 'witty'));
console.log(testMap.clearBucket('yellow'));
console.log(testMap.clearBucket('cord'));
console.log(testMap.hashmap);
