/**Binary Tree Level Order Traversal
 * 
 * 
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
 */

class tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new tree(3);

root.left = new tree(9);
root.right = new tree(20);

root.left.left = new tree(15);
root.left.right = new tree(7);


var levelOrder = function (root) {
    if (root === null) return [];
    let res = [];

    let queue = [root];

    let front = 0;

    while (queue.length > front) {
        let temp = [];
        let size = queue.length - front

        for (let i = 0; i < size; i++) {
            let curr = queue[front++];

            temp.push(curr.val);

            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }
        res.push(temp);
    }
    return res;
};

console.log(levelOrder(root));


/**
 * TC - O(n)
 * SC - O(n)
 */