/**Move all Zeros to the end of the array
 * 
 * Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

 * 
 * Input: 1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
Output: 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
Explanation: All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
Input : 1,2,0,1,0,4,0
Output: 1,2,1,4,0,0,0
Explanation : All the zeros are moved to the end and non-negative integers are moved to front by maintaining order
 */


// My approach 
var moveZeroes = function (nums) {
    let count = 0;
    let n = nums.length;

    let j = 0, i = 0;

    while (i < n) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            i++;
            j++;
        }
        else {
            i++;
            count++;
        }
    }

    for (let i = n - count; i < n; i++) {
        nums[i] = 0;
    }

    return nums;
};

let nums = [1, 2, 0, 1, 0, 4, 0];

// console.log(moveZeroes(nums));

/**
- Time complexity: O(n)
- Space complexity: O(1)
*/


function optimaize(nums) {
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }
    return nums;
}
console.log(optimaize(nums));