/**
 * Middle of the list
 * Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
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

var middleNode = function (head) {
    let count = 0;
    let current = head;
    while (current != null) {
        count++;
        current = current.next;
    }

    let middle = Math.floor(count / 2);
    current = head;
    for (let i = 0; i < middle; i++) {
        current = current.next;
    }
    return current;
};

var middleNode1 = function (head) {
    let slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


console.log(middleNode1(list.head));