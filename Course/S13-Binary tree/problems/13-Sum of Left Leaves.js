/**Sum of Left Leaves
 * 
 * Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000
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



var sumOfLeftLeaves = function (root) {
    let count = 0;
    if (root == null) return count;

    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (curr.left !== null) {
                if (curr.left.left === null && curr.left.right === null) {
                    count += curr.left.val;
                }
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
    }

    return count;
};


console.log(sumOfLeftLeaves(newnode));
