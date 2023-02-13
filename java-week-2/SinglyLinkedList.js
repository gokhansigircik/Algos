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
   * @returns {boolean}
   */
  isEmpty() {
      return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
      const newBack = new Node(data);
  
      if (this.isEmpty()) {
        this.head = newBack;
        return this;
      }
  
      let runner = this.head;
  
      while (runner.next !== null) {
        runner = runner.next;
      }
  
      runner.next = newBack;
      return this;
    }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {}

  /**
   * Calls insertAtBack on each item of the given array.
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

  insertAtFront(data) {
      const newHead = new Node(data) 
      newHead.next = this.head
      this.head = newHead
      return this;
  }

  removeHead(){
      if(this.isEmpty()){
          return null;
      }
      const oldHead = this.head
      this.head = oldHead.next
      return oldHead.data
  }

  /**
   * Removes the last node of this list.
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {}

  /**
   * Determines whether or not the given search value exists in this list.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {}

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {}

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {}

      /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
      concat(addList) {
        let runner = this.head;
        //Iterates through list until it reaches the end
        while (runner.next) {
            runner = runner.next;
        }
        //Takes new value and adds it to the end of the list
        runner.next = addList.head;

        return this;
    }

  /**
   * Finds the node with the smallest data and moves that node to the front of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {SinglyLinkedList} This list.
   */
  moveMinToFront() {
    let runner = this.head;
    // Sets minval to be biggest integer value possible before comparison.
    let minVal = Number.MAX_SAFE_INTEGER;
    // Iterates through the list to obtain lowest value in it.
    while (runner) {
        minVal = Math.min(minVal, runner.data);
        runner = runner.next;
    }
    // Runs helper function to remove minimum value before re-adding.
    this.removeVal(minVal);

    // Takes minVal and adds it to the head of the list.
    this.prepend(minVal, this.head.data);

    // !!! UNCOMMENT THIS IF NO PREPEND METHOD !!!
    // let newNode = new ListNode(minVal);
    // newNode.next = this.head;
    // this.head = newNode;

    return this;
}
}

splitOnVal(val) {
  let runner = this.head;
  // Declare a new split list to return.
  const splitList = new SinglyLinkedList();

  // Iterates through original list to find value.
  while (runner.next) {
      // If the value is found on the NEXT node,
      // Sets the new list's head to follow the 
      // split value.
      if (runner.next.data === val) {
          splitList.head = runner.next;
          // Old list before value is divided, rest is emptied.
          runner.next = null;
          return splitList;
      }
      runner = runner.next;
  }

  // If no value found, or the value was at the beginning of the list,
  // sets the new list to accept everything on old list and returns that.
  splitList.head = this.head;
  this.head = null;
  return splitList;
}

  // const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
  // const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
  // const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
  // const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
  // const unorderedList = new SinglyLinkedList().insertAtBackMany([
    //   -5, -10, 4, -3, 6, 1, -7, -2,
    // ]);
    
    /* node 4 connects to node 1, back to head */
    // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
    // perfectLoopList.head.next.next.next = perfectLoopList.head;
    
    /* node 4 connects to node 2 */
    // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
    // loopList.head.next.next.next = loopList.head.next;
    
    // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
      //   1, 1, 1, 2, 3, 3, 4, 5, 5,
      // ]);
      
      // Print your list like so:
      // console.log(firstThreeList.toArr());

const sll = new SinglyLinkedList();
sll.insertAtBack(1)
sll.insertAtBack(2)
sll.insertAtFront(0)
// console.log(sll.removeHead())
console.log(sll.moveMinToFront());

// console.log(sll)