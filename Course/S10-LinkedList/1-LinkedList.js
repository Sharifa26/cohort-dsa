// Linked List

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// the above class is the Node class give me like this
// 1 --> null
// 2 --> null
// 3 --> null
// 4 --> null
// 5 --> null

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Printing the list.
    print() { //TC - O(n)
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    //Inserting at the end of the list.
    add(data) {//TC - O(1)
        if (this.head === null) {
            this.head = new Node(data);
            this.tail = this.head;
        } else {
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Inserting at the beginning of the list.
    addAtBeginning(data) {//TC - O(1)
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addAtAnywhere(node, prev) {//TC - O(n)
        let node1 = new Node(node);
        let prev1 = new Node(prev);
        let current = this.head;
        //console.log(current,prev1);
        while (current.data != prev1.data) {
            //console.log(current);
            current = current.next;
        }
        //console.log(current);
        node1.next = current.next;

        current.next = node1;
    }

    //Delete at End 
    deleteAtBeginning() {//TC - O(1)
        this.head = this.head.next;
    }

    //Delete at the End node.
    deleteAtEnd() {//TC - O(n)
        //Empty List
        if (!this.head) return 'List is Empty';

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current.next != null) {
            previous = current;
            current = current.next;
        }
        //console.log(previous);
        previous.next = null;
    }

    //delete at random position.
    deleteAtRandom(position) {//TC - O(n)
        //Empty List
        if (!this.head) return 'List is Empty';

        if (position === 0) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (current != null && count < position) {
            count++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
    }

    //delete at middle of the linked list.
    deleteAtMiddle() {//TC - O(n)
        //Empty List
        if (!this.head) return 'List is Empty';

        let current = this.head;
        let count = 0;
        while (current !== null) {
            count++;
            current = current.next;
        }
        let position = Math.floor(count / 2);
        this.deleteAtRandom(position);
    }


    //Delete All linked list
    clear() {//TC - O(1)
        this.head = null;
    }
}


let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.addAtBeginning(5);
list.add(6);//tail
list.addAtBeginning(0);//head
list.addAtAnywhere(7, 2);
// list.deleteAtBeginning();
// list.deleteAtEnd();
//list.deleteAtMiddle();
//list.deleteAtRandom(0);
//list.print();
//list.clear();



//we can print the list by using console.log
// console.log(list.head.data);
// console.log(list.tail.data);
// console.log(list.head.next.data);
// console.log(list.head.next.next.data);


//we can print the list by using while loop
// while (list.head !== null) {
//     console.log(list.head.data);
//     list.head = list.head.next;
// }


//we can print the list by a function
list.print();