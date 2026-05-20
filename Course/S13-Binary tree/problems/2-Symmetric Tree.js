/**
 * Symmetric Tree


Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 */

var isSymmetric = function (root) {
    function dfs(p, q) {
        if (q == null && p == null) return true;
        if (q == null || p == null || p.val !== q.val) return false;

        return dfs(p.left, q.right) && dfs(p.right, q.left);
    }
    return dfs(root.left, root.right);
};