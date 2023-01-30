//this is a standard node for singly and doubly linked lists with retrieval/update methods

class Node {

  private _data: any;
  private _link: Node | null;//should be null or Node, but how to type Node? 

  constructor(data: any) {
    this._data = data;
    this._link = null;
  }
  //print the next Node in list
  public get link() {
    return this._link
  }
  //print data of current Node
  public get data() {
    return this._data;
  }
  //make new Node.. pass new Node as argument to preserved list integrity
  public set link(node: Node | null) {
    if (node instanceof Node || node === null) {
      this._link = node
    } else {
      throw new Error('This is not a node')
    }
  }
  //change data of current Node
  public set data(x: any) {
    this._data = x;
  }

}

export default Node;