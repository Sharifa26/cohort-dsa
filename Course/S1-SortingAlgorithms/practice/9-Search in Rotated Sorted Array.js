/**
 * Search in Rotated Sorted Array
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//==== Solution 1 ====// not working for all test cases
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (target == nums[mid]) {
            return mid;
        }
        else if (target < nums[mid]) {
            if (nums[mid - 1] < nums[mid] > nums[mid + 1]) {
                left = mid + 1;
            }
            else {
                right = right - 1;
            }
        }
        else {
            if (nums[mid + 1] < nums[mid] > nums[mid - 1]) {
                right = right - 1;
            }
            else {
                left = mid + 1;
            }
        }
    }

    return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0

//console.log(search(nums,target));


//==== Solution 2 ====// its works very well.

var searchLinear = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }
    return -1;
}

//console.log(searchLinear(nums, target));


/**
 - Time complexity: O(n)
 - Space complexity: O(1)
*/


//=== Binary Search =====

var BinarySearch = function (nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] == target) return mid;

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            }
            else {
                low = mid + 1;
            }
        }
        else {

            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }

        }
    }

    return -1;
}

console.log(BinarySearch(nums, target));

/**
 - Time complexity: O(n log n)
 - Space complexity: O(1)
*/