/**
 * Path Sum II
 * 
 * Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

 

Example 1:


Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
Example 2:


Input: root = [1,2,3], targetSum = 5
Output: []
Example 3:

Input: root = [1,2], targetSum = 0
Output: []
 

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

tree.right.right.left = new Tree(5);
tree.right.right.right = new Tree(1);


var pathSum = function (root, targetSum) {
    let result = [];

    dfs(root, targetSum, [], result);

    return result;
};

function dfs(root, targetSum, path, result) {
    if (root == null) return;

    path.push(root.val);
    targetSum -= root.val;

    if (root.left == null && root.right == null && targetSum == 0) {
        result.push([...path]);
    }

    dfs(root.left, targetSum, path, result);
    dfs(root.right, targetSum, path, result);

    path.pop();
}



let targetSum = 22;

console.log(pathSum(tree, targetSum));
