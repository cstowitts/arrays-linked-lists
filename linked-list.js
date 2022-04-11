/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {

    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }

    const secondToLast = this.tail;
    secondToLast.next = newNode;
    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }

    const newSecond = this.head;
    this.head = newNode;
    this.head.next = newSecond;
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {

    if (this.length === 0) {
      throw new Error("This LinkedList is empty!");
    }

    if (this.length === 1) {
      const oldTail = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldTail;

    } else {
      const oldTail = this.tail;
      let current = this.head;

      while (current !== oldTail) {

        if (current.next === oldTail) {
          this.tail = current;
          current.next = null;
          return oldTail;
        }
        current = current.next
      }
    }

  }

  /** shift(): return & remove first item. */

  shift() {

    if(this.length === 0){
      throw new Error("This LinkedList is empty!");
    }

    if(this.length === 1){
      const oldHead = this.head;
      this.head = null;
      this.tail = null;
      return oldHead;
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if(idx < 0 || idx > this.length-1){
      throw new Error("That's not a valid index, my guy!");
    }

    let currIdx = 0;
    let current = this.head;

    while(currIdx < this.length){
      if(currIdx === idx){
        return current.val;
      }
      currIdx++;
      current = current.next
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

/**
 * -if linkedlist has nothing in it (+ if you wanna add to empty LL)
 * -if you removed from LL with one node
 * -removing 2nd to last node
 * -removing 1st node
 * -removing last node
 */


module.exports = LinkedList;
