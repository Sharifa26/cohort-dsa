//Reverse a Linked 

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

function Reverse(list) {//TC - O(n)
    let previous = null , next = null, current = list.head;

    while(current != null){
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        list.head = previous;
    }

    return list;
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

Reverse(list).print();
