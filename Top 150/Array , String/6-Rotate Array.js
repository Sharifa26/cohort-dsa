/**
 * Rotate Array
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

//--> we have to rotate the array by one step
//--> we have to shift the last element to the first position
//--> we have to shift all the elements to the right
//--> we dont need to return the array just modify the original array.


// It can be only rotate by one step
//--- Rotate Array by 1
function rotate(nums) {
    let temp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
        nums[i] = nums[i - 1];
    }
    nums[0] = temp;


    return nums;
}

//console.log(rotate([1, 2, 3, 4, 5, 6, 7]));

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
*/


//--- Brute Force Approach
function rotateBruteForce(nums, k) {
    let n = nums.length;
    k = k % n;

    let temp = [];

    // Step 1: Store last k elements
    for (let i = n - k; i < n; i++) {
        temp.push(nums[i]);
    }

    // Step 2: Shift the rest to the right
    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }

    // Step 3: Copy temp elements to the start
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }

    return nums;
}

//console.log(rotateBruteForce([-1, -100, 3, 99], 2));
// Output: [3, 99, -1, -100]

/**
 * TC: 0(n-k)
 * SC: O(k)
 */


