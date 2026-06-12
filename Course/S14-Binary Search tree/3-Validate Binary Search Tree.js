/**
 * Validate Binary Search Tree
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [2,1,3]
Output: true
Example 2:


Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 */


/**                2
 *               / \
 *              1   3
 */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


let root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);

root.right.left = new Node(3);
root.right.right = new Node(6);

var isValidBST = function (root) {

    return validate(root, null, null);
};

function validate(root, min, max) {
    if (root == null) return true;

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) return false;

    return validate(root.left, min, root.val) && validate(root.right, root.val, max);
}


console.log(isValidBST(root));

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */