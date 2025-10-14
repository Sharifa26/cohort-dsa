/**
 * Swap Nodes in Pairs

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]
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

    // Inserting at the end of the list.
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


function swap(list){
    let head = list.head;
    let dummy = new Node(0,head);
    let temp = dummy;

    

    while(head != null && head.next != null){
        let Node1 = head;
        let Node2 = head.next;

        temp.next = Node2;
        Node1.next = Node2.next;
        Node2.next = Node1;

        temp = Node1;
        head = Node1.next;
    }
    list.head = dummy.next;
    return list;
}

swap(list);

list.print();