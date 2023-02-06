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
    //save key and overwrite value if key is the same. The only thing
    //we're testing for here is for when keys get the same hash value
    //you only here one 'hello' and one 'mellow' 
    assign(key, value) {
        let arrayIndex = this.hash(key);
        // console.log(arrayIndex);
        //increment while adjacent buckets full
        while (this.hashmap[arrayIndex]) {
            // console.log(arrayIndex);
            // console.log(this.hashmap[arrayIndex]);
            if (this.hashmap[arrayIndex].key === key) {
                // console.log(('duplicate value'));
                // console.log(this.hashmap);
                return;
            }
            arrayIndex++;
        }
        //***ADD TESTING FOR MATCHING VALUES */                                 
        this.hashmap[arrayIndex] = { key, value };
        // console.log(this.hashmap)
    }
    retrieve(key) {
        let arrayIndex = this.hash(key);
        if (!this.hashmap[arrayIndex]) {
            // console.log('no matching key in hashmap');
            return 'no matching key in hashmap';
        }
        while (this.hashmap[arrayIndex].key != key) {
            arrayIndex++;
            // console.log(arrayIndex);
            //if you hit a null value the key doesn't exist because assign only 
            //places incrementally. Break the loop if you hit null in this loop
            if (!this.hashmap[arrayIndex]) {
                // console.log('no matching value in hashmap');
                return 'no matching key in hashmap';
            }
        }
        return this.hashmap[arrayIndex];
        // return this.hashmap[arrayIndex].value;
    }
}
exports.default = OAHashMap;
