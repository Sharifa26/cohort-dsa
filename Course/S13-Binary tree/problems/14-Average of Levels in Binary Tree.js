/**Average of Levels in Binary Tree
 * 
 * Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
 */


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}


let tree = new Node(3);

tree.left = new Node(9);
tree.right = new Node(20);

tree.right.left = new Node(15);
tree.right.right = new Node(7);

var averageOfLevels = function (root) {
    let arr = [];

    if (root == null) return arr;

    let queue = [root];
    let head = 0;

    while (queue.length > head) {
        let size = queue.length - head;
        let sum = 0;

        for (let i = 0; i < size; i++) {
            let curr = queue[head++];

            sum += curr.val;

            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }

        arr.push(sum / size);
    }
    return arr;
};

console.log(averageOfLevels(tree));
