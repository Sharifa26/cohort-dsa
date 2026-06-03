/**
 * Binary Tree Level Order Traversal
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



var levelOrder = function (root) {

    if (root == null) return [];
    let result = [];

    let queue = [root];

    while (0 < queue.length) {
        let arr = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            //console.log(curr.val)
            arr.push(curr.val);

            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }

        result.push([...arr]);
    }
    return result;
};

console.log(levelOrder(tree));


/**
Time complexity: O(n)
Space complexity: O(n)
*/