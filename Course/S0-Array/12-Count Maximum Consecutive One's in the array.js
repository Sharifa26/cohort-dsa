/**
 * Count Maximum Consecutive One's in the array
 * 
 * Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array..

Example 1:
Input: prices = {1, 1, 0, 1, 1, 1}
Output: 3
Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

Example 2:
Input: prices = {1, 0, 1, 1, 0, 1} 
Output: 2
Explanation: There are two consecutive 1's in the array. 
 */

var findMaxConsecutiveOnes = function (nums) {
    let count = 0, max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            count++;
        }
        else {
            max = Math.max(count, max);
            count = 0;
        }
    }
    return Math.max(count, max);
};

let nums = [1, 1, 0, 1, 1, 1, 1, 1, 1, 1];
console.log(findMaxConsecutiveOnes(nums));
