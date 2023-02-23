/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class DLLNode {
    constructor(data){
        // TODO: add attributes of a DLLNode 
    }
}
/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // TODO: implement the constructor.
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {}

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBack(data) {}

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {}

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
// const singleNodeList = new DoublyLinkedList().insertAtBack(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//   -5,
//   -10,
//   4,
//   -3,
//   6,
//   1,
//   -7,
//   -2,
// ]);



removeMiddleNode() {
        //If list is empty, returns null.
        if (this.isEmpty()) return null;
        //If list only has one node, removes that node.
        if (this.head.next === null) {
            const removedNode = this.head;
            //Sets head and tail to null so they don't point
            //to single node anymore.
            this.head = null;
            this.tail = null;
            //With pointers for middle node removed, it will be garbage
            //collected. Return its data.
            return removedNode.data;
        }
        //Set 2 pointers, one that iterates forward through the list,
        //and one that iterates backward through the list.
        let forwardPointer = this.head;
        let reversePointer = this.tail;
        //Loop will keep going until either both pointers stop at the same node,
        //or they go past each other.
        while (forwardPointer !== reversePointer && forwardPointer.prev !== reversePointer) {
            forwardPointer = forwardPointer.next;
            reversePointer = reversePointer.prev;
        }
        //If forward and reverse pointer point to the same node, middle node is found.
        if (forwardPointer === reversePointer) {
            const removedNode = forwardPointer;
            //Goes to the previous node, to point it to the next node.
            forwardPointer.prev.next = forwardPointer.next;
            //Goes to the next node, and point it to the previous node.
            forwardPointer.next.prev = forwardPointer.prev;
            //With pointers for middle node removed, it will be garbage
            //collected. Return its data.
            return removedNode.data;
        }
        //No middle node to remove, returns null.
        else {
            return null;
        }
    }