/**
100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
 */


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


let p = new Node(1);
p.left = new Node(2);
p.right = new Node(3);

let q = new Node(1);
q.left = new Node(2);
q.right = new Node(3);


var isSameTree = function (p, q) {
    if (q == null && p == null) return true;
    if (q == null ||  p == null || p.value !== q.value) return false;

    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
};

console.log(isSameTree(p,q));

/**
Time complexity: O(n)
Space complexity: O(n)
*/