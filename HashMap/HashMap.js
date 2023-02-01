"use strict";
//this is a basic implementation with no collision handling. Refer to OpenAddressing and SeparateChaining
//for more functional examples 
Object.defineProperty(exports, "__esModule", { value: true });
class HashMap {
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
        const arrayIndex = this.hash(key);
        this.hashmap[arrayIndex] = value;
    }
    retrieve(key) {
        const arrayIndex = this.hash(key);
        return this.hashmap[arrayIndex];
    }
}
exports.default = HashMap;
