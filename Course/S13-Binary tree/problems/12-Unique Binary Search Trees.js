/**
 * Unique Binary Search TreesUnique Binary Search Trees
 * Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

 

Example 1:


Input: n = 3
Output: 5
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 19
 */


var numTrees = function (n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let nodes = 2; nodes <= n; nodes++) {

        for (let root = 1; root <= nodes; root++) {

            let left = root - 1;
            let right = nodes - root;

            dp[nodes] += dp[left] * dp[right];
        }
    }

    return dp[n];
};

console.log(numTrees(3));