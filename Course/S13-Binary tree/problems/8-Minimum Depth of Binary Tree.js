/**Minimum Depth of Binary Tree


Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 2
Example 2:

Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
 

Constraints:

The number of nodes in the tree is in the range [0, 105].
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



// var minDepth = function (root) {
//     if (root == null) return;

//     let result = Infinity;

//     let count = 0

//     dfs(root, count, result)

//     return result;

// };

// function dfs(root, count, result) {
//     if (root == null) return;

//     count++;

//     if (root.left == null && root.right == null && count < result) {
//         result = count;
//     }

//     dfs(root.left, count, result);
//     dfs(root.right, count, result);

//     count--;
// }


var minDepth = function (root) {
    if (root == null) return 0;
   
    let queue = [root];
    let count = 1;

    while (queue.length > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if(curr.left == null && curr.right == null){
                return count;
            }

            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }
        }
        count++;
    }
    return count;
};


console.log(minDepth(tree));
