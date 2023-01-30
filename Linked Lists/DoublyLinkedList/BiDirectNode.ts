//this builds on the singly linked node with an extra _prev property for bi-directional traversal
//it also adds setters and getters for this new _prev property 

class BiDirectNode {

  private _data: any;
  private _link: BiDirectNode | null;//should be null or Node, but how to type Node? 
  private _prev: BiDirectNode | null;

  constructor(data: any) {
    this._data = data;
    this._link = null;
    this._prev = null;
  }
  //print the next Node in list
  public get link() {
    return this._link
  }
  //print the previous Node in list
  public get prev() {
    return this._prev
  }
  //print data of current Node
  public get data() {
    return this._data;
  }
  //make new next Node.. pass new Node as argument to preserved list integrity
  public set link(node: BiDirectNode | null) {
    if (node instanceof BiDirectNode || node === null) {
      this._link = node
    } else {
      throw new Error('This is not a node')
    }
  }
  //make new previous node 
  public set prev(node: BiDirectNode | null) {
    if (node instanceof BiDirectNode || node === null) {
      this._prev = node
    } else {
      throw new Error('This is not a node')
    }
  }
  //change data of current Node
  public set data(x: any) {
    this._data = x;
  }

}

export default BiDirectNode;