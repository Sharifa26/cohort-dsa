class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(data){
        if(this.head == null){
            this.head = new Node(data);
            this.tail = this.head;
        }
        else{
            let newNode = new Node(data);
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print(){
        while(this.head != null){
            console.log(this.head.data);
            this.head = this.head.next;
        }
    }
}

let newLinkedList = new linkedList();
newLinkedList.add(3)
newLinkedList.add(4)
newLinkedList.add(6)
newLinkedList.add(10)

console.log(newLinkedList);

newLinkedList.print();

