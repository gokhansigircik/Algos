class ListNode {
  constructor(data){
      this.data = data;
      this.next = null;

  }
}


class SinglyLinkedList{

  constructor(){
      this.head = null;
  }

  
  /**
   * Reverses this list in-place without using any extra lists.
* - Time: (?).
* - Space: (?).
* @returns {SinglyLinkedList} This list.
  */
 reverse() {

  if(this.head == null){
    return null
  }

  let current = this.head;
  let previous;
  let next;

  while(current){

    next = current.next;
    current.next = previous;
    previous = current;
    current = next;

  }
  this.head = previous
  return this
 }
 
 /**
  * Determines whether the list has a loop in it which would result in
  * infinitely traversing unless otherwise avoided. A loop is when a node's
  * next points to a node that is behind it.
  * - Time: (?).
  * - Space: (?).
  * @returns {boolean} Whether the list has a loop or not.
 */
 hasLoop() {
  //Checks if list is empty or list only has one entry, returns that entry
  if (this.head === null || this.head.next === null) return this.head;
  
  //Sets 2 runners, one will traverse nodes 1 by 1
  let slowTraverse = this.head.next;
  
  //Second runner will jump every 2 nodes
  let fastTraverse = this.head.next.next;

  //If the list isn't loop, fast runner will eventually reach the end.
  //Otherwise it will loop around, eventually catch up to slow runner and return true.
  while(fastTraverse && fastTraverse.next){
      if(slowTraverse === fastTraverse){
          return true;
      }

      slowTraverse = slowTraverse.next;
      fastTraverse = fastTraverse.next.next;
  }
  //If there is an end of list, there is no loop.
  return false;
}

/**
 * Removes all the nodes that have a negative integer as their data.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list after the negatives are removed.
*/
removeNegatives() {
  //Checks if list is empty
  if (this.isEmpty()) return null;
  //If list has one entry and it's negative, returns empty list
  if (this.head.data < 0 && this.head.next === null) {
      this.head = null;
      return this;
  }
  //Sets 3 nodes, each node will go right after the other
  let currentNode = this.head;
  let previousNode = null, nextNode = null;

  //Iterates until current node reaches end
  while (currentNode) {
      //Moves next ahead of current
      nextNode = currentNode.next;
      //Checks if current value is negative
      if (currentNode.data < 0) {
          //Checks if previous exists yet, then assigns its next to nextNode
          if (previousNode) {
              previousNode.next = nextNode;
          }
          //Checks if current head is negative, changes the head to next
          if (this.head === currentNode) {
              this.head = nextNode;
          }
      }
      else {
          //Moves previous to current
          previousNode = currentNode;
      }
      //Moves current to next
      currentNode = nextNode;
  }
  return this;
}
}

const List = new SinglyLinkedList()
const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)