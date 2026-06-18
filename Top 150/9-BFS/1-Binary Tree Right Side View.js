/**
 * Binary Tree Right Side View
 * 
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:

Input: root = [1,2,3,null,5,null,4]

Output: [1,3,4]

Explanation:



Example 2:

Input: root = [1,2,3,4,null,null,null,5]

Output: [1,3,4,5]

Explanation:



Example 3:

Input: root = [1,null,3]

Output: [1,3]

Example 4:

Input: root = []

Output: []

 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 */


class tree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



let root = new tree(1);

root.left = new tree(2);
root.right = new tree(3);

root.left.right = new tree(5);

root.right.right = new tree(4);


var rightSideView = function (root) {
    if (root === null) return [];

    let queue = [root];
    let front = 0
    let res = [];


    while (queue.length > front) {
        let size = queue.length - front;
        let value = queue[front + size - 1].val;
        res.push(value);

        for (let i = 0; i < size; i++) {
            let curr = queue[front++];

            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }
    }

    return res;
};


console.log(rightSideView(root));


/**
 * TC - O(n)
 * SC - O(n)
 */