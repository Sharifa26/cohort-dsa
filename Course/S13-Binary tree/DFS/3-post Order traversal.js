class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let newNode = new Node(1);
newNode.left = new Node(2);
newNode.right = new Node(3);
newNode.left.left = new Node(4);
newNode.left.right = new Node(5);
newNode.right.left = new Node(6);
newNode.right.right = new Node(7);


function postOrder(root){
    if(root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}

console.log(postOrder(newNode));


/**
Time complexity: O(n)
Space complexity: O(n)
*/