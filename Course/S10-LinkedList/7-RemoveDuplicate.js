/**
 * 

 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Printing the list.
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    //Inserting at the end of the list.
    add(data) {
        if (this.head === null) {
            this.head = new Node(data);
            this.tail = this.head;
        } else {
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

var deleteDuplicates = function (list) {
    if (list.head == null) return list.head;

    let node = list.head;
    let pre = null;
    let seen = new Set();

    while (node != null) {
        //console.log(node.data);
        
        if (!seen.has(node.data)) {
            seen.add(node.data);
            pre = node; 
        } else {
            pre.next = node.next; 
        }
        node = node.next;
        
    }
    return list;
};




let list = new LinkedList();
list.add(1);
list.add(1);
list.add(4);
list.add(2);
list.add(3);
list.add(2);



deleteDuplicates(list);
list.print();