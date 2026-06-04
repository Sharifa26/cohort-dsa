/**Binary Tree Level Order Traversal II
 * 
 * Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
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



class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


let tree = new Node(3);

tree.left = new Node(9);
tree.right = new Node(20);

tree.right.left = new Node(15);
tree.right.right = new Node(7);




var levelOrderBottom = function (root) {
    let result = [];
    if (root == null) return result;

    let queue = [root];

    while (queue.length > 0) {
        let arr = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            arr.push(node.val);

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        result.unshift(arr);
    }
    return result;
};

console.log(levelOrderBottom(tree));



/**
Time complexity: O(n)
Space complexity: O(n)
*/