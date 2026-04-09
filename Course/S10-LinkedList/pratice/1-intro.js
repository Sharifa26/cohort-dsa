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
    add(data) {//TC=O(1)
        if (this.head == null) {
            this.head = new Node(data);
            this.tail = this.head;
        }
        else {
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print() {//TC=O(n)
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    addAtBegining(data) {//TC=O(1)
        let newdata = new Node(data);
        newdata.next = this.head;
        this.head = newdata;
    }

    atAnyPosition(data, pos) {//TC=O(n)
        let count = 0;
        let current = this.head;
        let previous = current;

        while (current != null) {
            let newNode = new Node(data);
            count++;
            if (pos === count) {

                previous.next = newNode;
                newNode.next = current;
                break;
            }

            previous = current;
            current = current.next;

        }
    }

    deleteAtBegining() {//TC=O(1)
        this.head = this.head.next;
    }

    deleteAtEnd() {//TC=O(n)
        let current = this.head;

        let previous = current;

        while (current !== null) {
            if (current.next == null) {
                previous.next = null;
                break;
            }
            previous = current;
            current = current.next;
        }
    }

    deleteAtAnyPos(pos) {//TC=O(n)
        let current = this.head;
        let count = 0;
        let previous = current;

        while (current !== null) {
            count++;
            if (count === pos) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}


let link = new LinkedList();
link.add(6);
link.add(7)
link.addAtBegining(8);
link.addAtBegining(9);
link.addAtBegining(0);

link.atAnyPosition(3, 5)
link.print();

link.deleteAtAnyPos(2)

//link.deleteAtBegining();
console.log(link);
link.print();


