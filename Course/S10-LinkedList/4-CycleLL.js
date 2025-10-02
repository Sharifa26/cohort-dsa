/**
 Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.
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

    //cycle at position pos
    createCycle(pos) {
    if (pos < 0) return;

    // pos is pointing to the node before the last node
    let cycleNode = null;
    let current = this.head;
    let index = 0;
    let lastNode = null;

    while (current) {
        if (index === pos) cycleNode = current;
        lastNode = current;
        current = current.next;
        index++;
    }

    if (lastNode && cycleNode) {
        lastNode.next = cycleNode;
    }
}
}




let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

//list.print();


list.createCycle(2);

console.log(list.tail);


var hasCycle = function (list) {
    let slow = list.head, fast = list.head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};


console.log(hasCycle(list));
