/**Search in a Binary Search Tree
 * 
 * You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:


Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
Example 2:


Input: root = [4,2,7,1,3], val = 5
Output: []
 

Constraints:

The number of nodes in the tree is in the range [1, 5000].
1 <= Node.val <= 107
root is a binary search tree.
1 <= val <= 107
 */


/**
 *                4
 *               / \
 *              2   7
 *             / \ 
 *            1   3 
 */


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


var searchBST = function (root, val) {
    if (root == null) return null;

    if (root.val == val) {
        return root;
    }
    else if (root.val > val) {
        return searchBST(root.left, val);
    }
    else {
        return searchBST(root.right, val);
    }
};


console.log(searchBST(root, 2));


/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */