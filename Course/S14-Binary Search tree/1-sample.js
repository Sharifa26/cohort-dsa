/**
 * Binary search tree - Not Balanced
 *                    - the left node is always less than or Equal to the root
 *                    - the right node is always greater than the root
 *                    - root.left <= root < root.right
 *                    - If we do Inorder traversal, it will be in sorted order or Increasing order
 */


/**
 *                12
 *               /  \
 *              10   13
 *             /  \    \
 *            5    11   15
 *           / \   
 *          2   7   
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(12);
root.left = new Node(10);
root.right = new Node(13);

root.left.left = new Node(5);
root.left.right = new Node(11);

root.right.left = new Node(15);

root.left.left.left = new Node(2);
root.left.left.right = new Node(7);






function BST(root) {
    if (root == null) {
        return null;
    }

    BST(root.left);
    console.log(root.val);
    BST(root.right);
}

BST(root);