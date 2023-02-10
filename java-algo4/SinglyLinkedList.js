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
      return true;
    } else {
      return false;
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
  insertAtBackRecursive(data, runner = this.head) {}

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
      runner = runner.next;
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
        return true;
      }
      runner = runner.next;
    }
    return false;
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
    if (current.data === val) {
      return true;
    }

    return this.containsRecursive(val, current.next);
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
    if (runner.data > maxNode.data) {
      maxNode = runner;
    }

    return this.recursiveMax(runner.next, maxNode);
  }

  ///! FRIDAY //////////////////////////////

/**
 * Retrieves the data of the second to last node in this list.
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
secondToLast() {
  if(this.isEmpty()){
    return null;
  }
  if (this.head.next === null){
    return null;
  }
  let runner = this.head;
  while(runner.next.next){
    runner = runner.next;
  }
  return runner.data;
}

// ********CHRIS*********SOLUTION 2
// secondToLast() {
//   //Checks if the list is empty or it only has one Node, returns null.
//   if (this.isEmpty() || !this.head.next) {
//       return null;
//   }

//   //Assigns a pointer to go through the list
//   let runner = this.head;
//   //Iterates through the list and stops just before the last
//   //Node with a non-null value
//   while (runner.next.next) {
//       runner = runner.next;
//   }
//   //Returns data found in second to last node
//   return runner.data;
// }



/**
 * Removes the node that has the matching given val as it's data.
 * @param {any} val The value to compare to the node's data to find the
 *    node to be removed.
 * @returns {boolean} Indicates if a node was removed or not.
 */
removeVal(val) {
  if( this.isEmpty()){
    return false;
  }
  if (this.head.data === val){
    this.removeHead()
    return true;
  }

  let runner = this.head;
  while(runner.next){
  if ( runner.next.data === val){
    runner.next = runner.next.next;
    return true;
  }
  }
  return false;
}

// ***********CHRIS SOLUTION********2
// removeVal(val) {
//   //Checks if list is empty beforehand
//   if (this.isEmpty()) return false;

//   //Iterates through list until a value is found
//   let runner = this.head, previousNode = null;
//   while (runner) {
//       //checks if value is found in each iteration. If found,
//       //return true, otherwise, pointer goes to the next Node.
//       if (runner.data === val) {
          
//           previousNode.next = runner.next;
//           runner = null;
//           return true
//       }
//       previousNode = runner;
//       runner = runner.next;
//   }
//   //Went through the list and could not find the value, returns false.
//   return false;
// }

// EXTRA
/**
 * Inserts a new node before a node that has the given value as its data.
 * @param {any} newVal The value to use for the new node that is being added.
 * @param {any} targetVal The value to use to find the node that the newVal
 *    should be inserted in front of.
 * @returns {boolean} To indicate whether the node was pre-pended or not.
 */
// prepend(newVal, targetVal) {
//   if( this.isEmpty()){
//     return false;
//   }
//   const newNode = new Node(newVal)
//   if (this.head.data === targetVal){
//     newNode.next = this.head;
//     this.head = newNode;
//     return true;
//   }

//   let runner = this.head;
//   while(runner.next){
//   if ( runner.next.data === targetVal){
//     newNode.next = runner.next;
//     runner.next = newNode;
//     return true;
//   }
//   }
//   return false;
// }

//   }

  // ***********chris********** SOLUTION 2
  prepend(newVal, targetVal) {
    //Checks if list is empty beforehand
    if (this.isEmpty()) return false;

    //Iterates through list until a value is found,
    //keeping track of the previous node for insertion
    let runner = this.head, previousNode = null;
    while (runner) {
        //checks if value is found in each iteration.
        if (runner.data === targetVal) {
            //Value is found, create a new node
            const newNode = new ListNode(newVal);
            
            //Checks if list has a previous node, then assigns
            //newNode to the previous node's.next
            if(previousNode) previousNode.next = newNode;
            
            //There is no previous node, new Node is now the head
            //of the list
            else newNode = this.head;
            
            //Assign's new node's next to the runner position to where found
            //value is stored, then returns true
            newNode.next = runner;
            return true
        }
        //Iterating to the next node
        previousNode = runner;
        runner = runner.next;
    }
    //Went through the list and could not find the value, returns false.
    return false;
}
// **************************chris********************
  
  /******************************************************************* 
  Multiple test lists already constructed to test your methods on.
  Below commented code depends on insertAtBack method to be completed,
  after completing it, uncomment the code.
  */
//   const emptyList = new SinglyLinkedList();


// const node4 = new Node(4);
// const node3 = new Node(3);
// const node2 = new Node(2);
// const node1 = new Node(1);

// const SLL = new SinglyLinkedList();
// SLL.insertAtBack(1);
// SLL.insertAtBack(2);
// SLL.insertAtBack(3);
// SLL.insertAtBack(4);
// SLL.insertAtBack(333);
// console.log(SLL.removeBack())
// SLL.removeBack()

// console.log(SLL.contains(333));
// console.log(SLL.contains(11));   returns false, up returns trues.

// underneath returns true
// console.log(SLL.containsRecursive(333));
// this returns false
// console.log(SLL.containsRecursive(11));
// console.log(SLL.recursiveMax());
// console.log(SLL.secondToLast());
// console.log(SLL.removeHead());
console.log(SLL.prepend(1,4));
console.log(SLL.toArr());




