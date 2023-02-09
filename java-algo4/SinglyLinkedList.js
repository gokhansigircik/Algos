class Node {

  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
      this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {
      if (this.head === null) {
          return true
      } else {
          return false
      }
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
      const newNode = new Node(data);
      if (this.isEmpty() == true) {
          this.head = newNode;
      } else {
          let pointer = this.head;
          while (pointer.next != null) {
              pointer = pointer.next;
          }
          pointer.next = newNode;
      }
  }




  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) { }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
      for (const item of vals) {
          this.insertAtBack(item);
      }
      return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
      const arr = [];
      let runner = this.head;

      while (runner) {
          arr.push(runner.data);
          runner = runner.next;
      }
      return arr;
  }
  //////////////! WEDNESDAY //////////////////////
  insertAtFront(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      return this;
  }
  removeHead() {
      if (this.isEmpty()) {
          return null;
      }

      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
      return temp.data;
  }
  average() {
      let sum = 0;
      let counter = 0;
      let average = 0;
      let runner = this.head;

      while (runner) {
          sum += runner.data;
          counter++;
          runner = runner.next;
      }
      average = sum / counter;
      return average;


  }

  //////////////! THURSDAY ////////////////

  /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
      if (this.isEmpty()) {
          return false;
      }
      if (this.head.next === null) {
          let temp = this.head.data;
          this.head = null;
          return temp;
      }

      let runner = this.head;
      while (runner.next.next != null) {
          runner = runner.next
      }
      let temp = runner.next.data;
      runner.next = null;

      return temp;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
      if (this.isEmpty()) {
          return false;
      }
      let runner = this.head;
      while (runner) {
          if (runner.data === val) {
              return true
          }
          runner = runner.next
      }
      return false
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) { 
      if (current === null) {
          return false;
      }
      if(current.data === val) {
          return true
      }

      return this.containsRecursive(val, current.next)
  }

  // EXTRA
  /**
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) { 
      if (runner === null) {
          return maxNode.data;
      }
      if(runner.data > maxNode.data) {
          maxNode = runner;
      }

      return this.recursiveMax(runner.next, maxNode)
  }

}

const node4 = new Node(4);
const node3 = new Node(3);
const node2 = new Node(2);
const node1 = new Node(1);

const SLL = new SinglyLinkedList();
SLL.insertAtBack(1);
SLL.insertAtBack(2);
SLL.insertAtBack(3)
SLL.insertAtBack(4);
SLL.insertAtBack(333)
// console.log(SLL.removeBack())
// SLL.removeBack()
console.log(SLL.recursiveMax());
console.log(SLL.toArr());