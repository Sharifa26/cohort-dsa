//tree Function

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right)
}


let tree = new TreeNode('A');

tree.left = new TreeNode('B');
tree.right = new TreeNode('c');

tree.left.left = new TreeNode('D');
tree.left.right = new TreeNode('E');

tree.right.right = new TreeNode('F');


function BFS(root) {
    if (root == null) {
        return;
    }
    let queue = [];
    queue.push(root);

    while (queue.length > 0) {
        let curr = queue.shift();

        console.log(curr.val);

        if (curr.left !== null) {
            queue.push(curr.left);
        }

        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
}


console.log(BFS(tree));


/**
Time complexity: O(n)
Space complexity: O(n)
*/