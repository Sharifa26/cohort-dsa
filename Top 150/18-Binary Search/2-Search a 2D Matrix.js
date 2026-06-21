/**Search a 2D Matrix
 * 
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
 */


var searchMatrix = function (matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;

    let low = 0, high = (row * col) - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let r = Math.floor(mid / col);
        let c = mid % col;
        let ele = matrix[r][c];


        if (ele == target) return true;
        else if (ele > target) high = mid - 1;
        else low = mid + 1; 3
    }
    return false;
};

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 11;

console.log(searchMatrix(matrix, target));


/**
 * Time Complexity: O(log n*m)
 * Space Complexity: O(1)
 */