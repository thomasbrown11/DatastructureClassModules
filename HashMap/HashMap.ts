
class HashMap {
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
    const arrayIndex: number = this.hash(key);
    this.hashmap[arrayIndex] = value;
  }

  public retrieve(key: string): any {
    const arrayIndex: number = this.hash(key);
    return this.hashmap[arrayIndex];
  }

}

export default HashMap;