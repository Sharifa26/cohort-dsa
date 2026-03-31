/**
 * Left Rotate the Array by One
 * 
 * Problem Statement: Given an integer array nums, rotate the array to the left by one.

Note: There is no need to return anything, just modify the given array.

Example 1:
Input:
 nums = [1, 2, 3, 4, 5]  
Output:
 [2, 3, 4, 5, 1]  
Explanation:
 Initially, nums = [1, 2, 3, 4, 5]  
Rotating once to the left results in nums = [2, 3, 4, 5, 1].

Example 2:
Input:
 nums = [-1, 0, 3, 6]  
Output:
 [0, 3, 6, -1]  
Explanation:
 Initially, nums = [-1, 0, 3, 6]  
Rotating once to the left results in nums = [0, 3, 6, -1].
 */

function rotate(nums) {
    let first = nums[0];

    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }
    nums[nums.length - 1] = first;

    return nums;
}



//console.log(rotate(nums));


/**
- Time complexity: O(n)
- Space complexity: O(1)
*/


/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 */

// My approach 
var rotate = function (nums, k) {
    let n = nums.length;
    k = k % n;
    let first = nums.slice(n - k);
    let second = nums.slice(0, n - k)
    let temp = first.concat(second);

    for (let i = 0; i < n; i++) {
        nums[i] = temp[i];
    }
    return nums;
};

//console.log(rotate(nums,3));


/**
- Time complexity: O(n)
- Space complexity: O(n)
*/


var optimal = function (nums, k) {
    let n = nums.length;
    k = k % n;

    reverse(nums, 0, n - k - 1);
    reverse(nums, n - k, n - 1);
    reverse(nums, 0, n - 1)

    return nums;
}

function reverse(num, start, end) {
    while (start < end) {
        [num[start], num[end]] = [num[end], num[start]];
        start++;
        end--;
    }
}
let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
console.log(optimal(nums, k));



/**
- Time complexity: O(n)
- Space complexity: O(1)
*/
