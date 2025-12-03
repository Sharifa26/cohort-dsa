/**
 * Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return left;
};

const nums = [1, 3]
let target = 2

console.log(searchInsert(nums, target));


/**
 - Time complexity: O(log n)
 - Space complexity: O(1)
*/


/**
 * 1- first take the two pointers and move them towards each other -- left and right
 * 2- if the middle element is equal to the target, return the index
 * 3- if the middle element is greater than the target, move the right pointer to the middle element
 * 4- if the middle element is less than the target, move the left pointer to the middle element
 * 5- if the midddle is not found, return the index of the element that is greater than the target
 * 6- return the Left pointer
 */