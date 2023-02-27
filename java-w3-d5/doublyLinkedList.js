class DLLNode {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {

    constructor(){
        this.head = null
        this.tail = null
    }

    isEmpty(){
        return this.head === null
    }
    
    
    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} targetVal The node data to find.
 * @param {any} newVal Data for the new node.
 * @returns {boolean} Indicates if the new node was added.
    */
    insertAfter(targetVal, newVal) {
        if(this.isEmpty()){
            return false
        }

        let current = this.head
        let next;

        while(current){
            next = current.next
            if(current.data === targetVal){
                const newNode = new DLLNode(newVal)
                current.next = newNode
                newNode.prev = current
                newNode.next = next
                if(next === null){
                    this.tail = newNode
                } else {
                    next.prev = newNode
                }
                return true
            }
            current = current.next
        }
        return false
   }

   /**
    * Inserts a new node with the given newVal before the node that has the
    * given targetVal as it's data.
    * - Time: O(?).
    * - Space: O(?).
    * @param {any} targetVal The node data to find.
    * @param {any} newVal Data for the new node.
    * @returns {boolean} Indicates if the new node was added.
   */
  insertBefore(targetVal, newVal) {
    if(this.isEmpty()){
        return false
    }

    let current = this.head
    let previous = null;

    while(current){
        if(current.data === targetVal){
            const newNode = new DLLNode(newVal)
            current.prev = newNode
            newNode.next = current
            newNode.prev = previous
            if(previous === null){
                this.head = newNode
            } else {
                previous.next = newNode
            }
            return true
        }
        previous = current
        current = current.next
    
    }
    return false
  }

}