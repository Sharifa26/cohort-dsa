/**
 * Minimum Element After Replacement With Digit Sum
 * 
 * You are given an integer array nums.

You replace each element in nums with the sum of its digits.

Return the minimum element in nums after all replacements.

 

Example 1:

Input: nums = [10,12,13,14]

Output: 1

Explanation:

nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

Example 2:

Input: nums = [1,2,3,4]

Output: 1

Explanation:

nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.

Example 3:

Input: nums = [999,19,199]

Output: 10

Explanation:

nums becomes [27, 10, 19] after all replacements, with minimum element 10.

 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 104
 */

var minElement = function (nums) {
    let min = Infinity;
    for(let num of nums){
        num = sumDigits(num);
        if(num < min){
            min = num;
        }
    }
    return min;

};

function sumDigits(num) {
    return num
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

//console.log(minElement([999, 19, 199]));

/**
 * Time Complexity: O(n * d)
 * Space Complexity: O(d)
 */


var OptimizedMinElement = function (nums) {
    let min = Infinity;
    for(let i=0;i<nums.length;i++){
        let temp = nums[i];
        let sum = 0;

        while(temp>0){
            if(sum > min) break;
            sum += temp % 10;
            temp = Math.floor(temp /10);
        }
        if(sum < min) min = sum;
    }
    return min;
}

console.log(OptimizedMinElement([999, 19, 199]));

/**
 * Time Complexity: O(n * d)
 * Space Complexity: O(1)
 */

