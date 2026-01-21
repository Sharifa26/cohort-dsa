class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Insertion
    add(data) {
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

    //Insertion at head
    addAtHead(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }

    //Insertion at last
    addAtLast(data){
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        return this.tail;
    }

    //Insertion at any position 
    addAtAny(pos,val){
        if(this.head == null) return this.head;
        if(pos === 1){
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
            return this.head
        }
        let count = 1,current = this.head, prev = null;
        while(current != null){
            if(pos === count){
                let newNode = new Node(val);
                prev.next = newNode;
                newNode.next = current;
                break;
            }
            count++;
            prev = current;
            current = current.next;
        }
        return this.head;
    }

    //Insertion Before the Value
    addBeforevalue(x,val){
        if(this.head == null) return this.head;
        let newNode = new Node(val);
        if(this.head.data === x){
            newNode.next = this.head;
            this.head = newNode;
            return this.head;
        }
        let current = this.head,prev = null;
        while(current != null){
            if(current.data === x){
                prev.next = newNode;
                newNode.next = current;
                break;
            }
            prev = current;
            current = current.next;
        }
        return this.head;
    }

    print() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    checkIfpresent(val) {
        let current = this.head;
        while (current != null) {
            if (current.data === val) return true;
            current = current.next;
        }
        return false;
    }

    findIndex(val) {
        let current = this.head;
        let count = 0;
        while (current != null) {
            if (current.data === val) return count;
            count++;
            current = current.next;
        }
        return -1;
    }

    deletehead() {
        if (this.head == null) return -1;
        this.head = this.head.next;
        return this.head;
    }

    deleteTail() {
        if (this.head == null || this.head.next == null) return null;
        let current = this.head;
        while (current.next.next != null) {
            current = current.next;
        }
        current.next = null;

        return current;
    }

    deletePosition(pos) {
        if(this.head === null) return this.head;
        if(pos === 1){ 
            this.head = this.head.next;
            return this.head;
        }
        let count = 1 , current = this.head, prev = null;
        while(current != null){
            if(pos === count){
                prev.next = prev.next.next;
                break;
            }
            count++;
            prev = current;
            current = current.next;
        }
        return this.head;
    }

    deleteValue(val) {
        if(this.head === null) return this.head;
        if(val === this.head.data){ 
            this.head = this.head.next;
            return this.head;
        }
        let current = this.head, prev = null;
        while(current != null){
            if(val === current.data){
                prev.next = prev.next.next;
                break;
            }
            prev = current;
            current = current.next;
        }
        return this.head;
    }
}

let newLinkedList = new linkedList();
newLinkedList.add(3)
newLinkedList.add(4)
newLinkedList.add(6)
newLinkedList.add(10)
newLinkedList.add(1)
newLinkedList.add(9)

//console.log(newLinkedList);

// newLinkedList.print();

// console.log(newLinkedList.checkIfpresent(1));

// console.log(newLinkedList.findIndex(7));

// console.log(newLinkedList.deletehead());

//console.log(newLinkedList.deleteTail());

//console.log(newLinkedList.deletePosition(6));

//console.log(newLinkedList.deleteValue(7));

//newLinkedList.addAtHead(0);

// newLinkedList.addAtLast(0);

//newLinkedList.addAtAny(2,15);

newLinkedList.addBeforevalue(10,20);

newLinkedList.print();

