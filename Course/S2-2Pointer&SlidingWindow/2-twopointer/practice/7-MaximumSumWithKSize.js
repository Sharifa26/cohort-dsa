/**
 * Maximum Sum of Distinct Subarrays With Length K
 * 
 * You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
 */


/**
 * - here we have to find the maximum sum of distinct subarrays of size k
 * - with non repeating elements
 * - we can use two pointers.
 */



function Maximum(nums, k) {
    let n = nums.length;
    let maxSum = 0;
    let left = 0, right = 0;
    let sum = 0;
    let set = new Set();
    while (right < n) {
        if (right - left > k - 1) {
            sum = sum - nums[left];
            sum = sum + nums[right];
            set.add(nums[right]);
            set.delete(nums[left]);

            if (set.size === k) {
                maxSum = Math.max(maxSum, sum);
            }

            left++;
            right++;
        }
        else {
            set.add(nums[right]);
            sum = sum + nums[right];
            if (set.size === k) {
                maxSum = Math.max(maxSum, sum);
            }
            right++;
        }
    }
    return maxSum;
}

let nums = [9, 9, 9, 1, 2, 3], k = 3;

//console.log(Maximum(nums, k));

/**
 * here I m using a set to store the elements of the subarrays but its fails for the case when the array has repeating congiguous elements
 */


// My Solution
var maximumSubarraySum = function (nums, k) {
    let n = nums.length;
    let maxSum = 0;
    let left = 0, right = 0;
    let sum = 0;
    let map = new Map()
    while (right < n) {
        if (right - left + 1 > k) {
            sum = sum - nums[left];
            sum = sum + nums[right];
            map.set(nums[right], (map.get(nums[right]) || 0) + 1)
            map.set(nums[left], map.get(nums[left]) - 1)

            if (map.get(nums[left]) === 0) {
                map.delete(nums[left])
            }

            if (map.size === k) {
                maxSum = Math.max(maxSum, sum);
            }

            left++;
            right++;
        }
        else {
            map.set(nums[right], (map.get(nums[right]) || 0) + 1)
            sum = sum + nums[right];
            if (map.size === k) {
                maxSum = Math.max(maxSum, sum);
            }
            right++;
        }
    }
    return maxSum;
};

//console.log(maximumSubarraySum(nums, k));

/**
 * here I m using a map to store the elements of the subarrays and its works for the case when the array has repeating congiguous elements
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */


function betterSolution(nums, k) {
    let n = nums.length;
    let maxSum = 0, sum = 0;
    let map = new Map();
    let left = 0;
    for (let right = 0; right < n; right++) {
        sum += nums[right];
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);

        if( right - left + 1 > k) {
            sum -= nums[left];
            map.set(nums[left], map.get(nums[left]) - 1);
            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }
            left++;
        }

        if( right - left + 1 === k && map.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}
console.log(betterSolution(nums, k));

/**
 * Time Complexity: O(n)
 * Space Complexity: O(k)
 */