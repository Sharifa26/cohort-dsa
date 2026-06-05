/**
 * Binary Tree Zigzag Level Order Traversal
 * 
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
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



var zigzagLevelOrder = function (root) {
    let result = [];
    if (root == null) return result;

    let queue = [root];
    let count = 1;

    while (queue.length > 0) {
        let arr = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (count % 2 == 0) arr.unshift(curr.val);
            else arr.push(curr.val);

            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        count++;

        result.push(arr);
    }
    return result;
};

function left(queue, arr) {


}


console.log(zigzagLevelOrder(tree));
