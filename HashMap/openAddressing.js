"use strict";
//there are no examples given but recall that open addressing is keeping the instantiated array
//as the only datastructure
//when adding a value to an already full index you move it to the next
Object.defineProperty(exports, "__esModule", { value: true });
//look into quadratic probing concept (exponentially growing distances between increment in the prob)
//.. like move +1, then +2, then +4 or even larger gaps
class OAHashMap {
    constructor(size = 0) {
        this.hashmap = new Array(size).fill(null);
    }
    hash(key) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode += (key.charCodeAt(i) + hashCode);
        }
        return hashCode % this.hashmap.length;
    }
    assign(key, value) {
        let arrayIndex = this.hash(key);
        //increment while adjacent buckets full
        while (this.hashmap[arrayIndex]) {
            arrayIndex++;
        }
        //***ADD TESTING FOR MATCHING VALUES */
        this.hashmap[arrayIndex] = value;
    }
    retrieve(key) {
        const arrayIndex = this.hash(key);
        return this.hashmap[arrayIndex];
    }
}
const testMap = new OAHashMap(10);
// console.log(testMap);
console.log(testMap.hash('hello'));
testMap.assign('hello', 'kitty');
testMap.assign('mellow', 'city');
testMap.assign('mellow', 'city');
console.log(testMap);
exports.default = OAHashMap;
