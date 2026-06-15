class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);

root.left.left = new Node(1);
root.left.right = new Node(3);



var inOrderSuccessor = function (key, root) {

    let arr = [];

    inOrderTraversal(arr, root);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key && i + 1 < arr.length) {
            return arr[i + 1];
        }
    }
    return null;
}



function inOrderTraversal(arr, root) {
    if (root == null) return;

    inOrderTraversal(arr, root.left);
    arr.push(root.val);
    inOrderTraversal(arr, root.right);
}



//console.log(inOrderSuccessor(7,root));




let target = new Node(4);

var inOrder = function (target, root) {
    let successor = null;

    while (root) {
        if (root.val > target.val) {
            successor = root.val;
            root = root.left;
        }
        else {
            root = root.right;
        }
    }

    return successor;
}


console.log(inOrder(target, root));
