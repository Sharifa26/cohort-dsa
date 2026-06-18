/***Average of Levels in Binary Tree
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

var averageOfLevels = function (root) {
    if (root === null) return [];

    let queue = [root], front = 0, res = [];;

    while (queue.length > front) {
        let size = queue.length - front;
        let avg = 0

        for (let i = 0; i < size; i++) {
            let curr = queue[front++];

            avg += curr.val;

            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }
        avg = avg / size
        res.push(avg);
    }
    return res;
};


console.log(averageOfLevels(root));


/**
 * TC - O(n)
 * SC - O(n)
 */