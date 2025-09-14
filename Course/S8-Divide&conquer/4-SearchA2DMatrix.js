/**
 Search a 2D Matrix

You are given an m x n integer matrix matrix with the following two properties:

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
*/

var searchMatrix = function (matrix, target) {

    let col = matrix[0].length;
    let row = matrix.length;
    let low = 0, high = (row * col) - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let r = Math.floor(mid / col);
        let c = mid % col
        let ele = matrix[r][c];
        if (target === ele) {
            return true;
        }
        else if (ele > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13));


/**
 * (m*n) = total number of elements.
 Time Complexity: O(log(m*n))
 Space Complexity: O(1)
*/