//this class is used to create a single node -->  1 -->null
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


//this class is used to create a linked list --->   1--> 2--> 3-->null.
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
    add(node){
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
    }

    //Inserting at the beginning of the list.
    addAtbeginning(node){
        node.next = this.head;
        this.head = node;
    }

    //Inserting a node after another node.
    addAfterNode(node,prev){
        node.next = prev.next;
        prev.next = node;
    }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);


let list = new LinkedList();
list.add(node1);
list.add(node2);
list.add(node3);
list.add(node4);
list.add(node5);
list.addAtbeginning(node6);
list.addAfterNode(node7,node3)



list.print();