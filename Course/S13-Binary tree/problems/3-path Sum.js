/**
 * Path Sum
 * 
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: false
Explanation: There are two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5.
Example 3:

Input: root = [], targetSum = 0
Output: false
Explanation: Since the tree is empty, there are no root-to-leaf paths.
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-1000 <= Node.val <= 1000
-1000 <= targetSum <= 1000
 */




class Tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


let tree = new Tree(5);

tree.left = new Tree(4);
tree.right = new Tree(8);

tree.left.left = new Tree(11);

tree.left.left.left = new Tree(7);
tree.left.left.right = new Tree(2);


tree.right.left = new Tree(13);
tree.right.right = new Tree(4);

tree.right.right.right = new Tree(1);



var hasPathSum = function (root, targetSum) {
    if (root == null) return false;


    targetSum -= root.val;

    if (isLeaf(root) && targetSum == 0) {
        return true;
    }


    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

function isLeaf(root) {
    if (root.left == null && root.right == null) {
        return true;
    }
    return false;
}

let targetSum = 22
console.log(hasPathSum(tree, targetSum));



/**
Time complexity: O(n)
Space complexity: O(n)
*/