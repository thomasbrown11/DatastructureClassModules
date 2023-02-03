//there are no examples given but recall that open addressing is keeping the instantiated array
//as the only datastructure
//when adding a value to an already full index you move it to the next

//look into quadratic probing concept (exponentially growing distances between increment in the prob)
//.. like move +1, then +2, then +4 or even larger gaps

class OAHashMap {
  hashmap: null[] | any[];

  constructor(size: number = 0) {
    this.hashmap = new Array(size).fill(null);
  }

  public hash(key: string): number {
    let hashCode: number = 0;
    for (let i: number = 0; i < key.length; i++) {
      hashCode += (key.charCodeAt(i) + hashCode);
    }
    return hashCode % this.hashmap.length;
  }

  public assign(key: string, value: any): void {
    let arrayIndex: number = this.hash(key);
    //increment while adjacent buckets full
    while (this.hashmap[arrayIndex]) {
      arrayIndex++
    }

    //***ADD TESTING FOR MATCHING VALUES */

    this.hashmap[arrayIndex] = value;
  }

  public retrieve(key: string): any {
    const arrayIndex: number = this.hash(key);
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



export default OAHashMap;