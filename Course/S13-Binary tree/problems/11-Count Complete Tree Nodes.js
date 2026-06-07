/**Count Complete Tree Nodes
 * 
 * Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Design an algorithm that runs in less than O(n) time complexity.

 

Example 1:


Input: root = [1,2,3,4,5,6]
Output: 6
Example 2:

Input: root = []
Output: 0
Example 3:

Input: root = [1]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 5 * 104].
0 <= Node.val <= 5 * 104
The tree is guaranteed to be complete.
 */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}


let newnode = new Node(1);

newnode.left = new Node(2);
newnode.right = new Node(3);

newnode.left.left = new Node(4);
newnode.left.right = new Node(5);

newnode.right.left = new Node(6);
newnode.right.right = new Node(7);


var countNodes = function (root) {
    let count = 0;

    function traversal(root) {
        if (root == null) return;

        count++;

        traversal(root.left);
        traversal(root.right);
    }

    traversal(root);
    return count;

};


console.log(countNodes(newnode));
