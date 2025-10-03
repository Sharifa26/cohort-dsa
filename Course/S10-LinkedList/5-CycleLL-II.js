/** Cycle in a linked list - II
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.
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

//console.log(list.tail);


var detectCycle = function (head) {
    let slow = head, fast = head;
    let cycleFound = false;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            cycleFound = true;
            break;
        }
    }
    if (!cycleFound) return null;
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};

console.log(detectCycle(list.head));