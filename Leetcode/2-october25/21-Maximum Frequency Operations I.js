/**
 * Maximum Frequency of an Element After Performing Operations I
 * 
 * 
 * You are given an integer array nums and two integers k and numOperations.

You must perform an operation numOperations times on nums, where in each operation you:

Select an index i that was not selected in any previous operations.
Add an integer in the range [-k, k] to nums[i].
Return the maximum possible frequency of any element in nums after performing the operations.

 

Example 1:

Input: nums = [1,4,5], k = 1, numOperations = 2

Output: 2

Explanation:

We can achieve a maximum frequency of two by:

Adding 0 to nums[1]. nums becomes [1, 4, 5].
Adding -1 to nums[2]. nums becomes [1, 4, 4].
Example 2:

Input: nums = [5,11,20,20], k = 5, numOperations = 1

Output: 2

Explanation:

We can achieve a maximum frequency of two by:

Adding 0 to nums[1].
*/


/**
 * ---> we must perform numOperations times on nums
 * --> in each operation we can select an unique index and add an integer in range [-k,k] to nums[i]
 * --> we have to return the maximum possible frequency of any element in nums after performing the operations
 * ---> GOAL: maximize the frequency of any element in the array after performing numOperations
*/

/**
 * --> nums = [1,4,5], k = 1, numOperations = 2
 * --> we can perform two operations
 * --> we can use the k of range [-1,1] to add to the selected index
 * ---> nums[1] + 0 = 4
 * ---> nums[2] + -1 = 4
 * --> now the array becomes [1,4,4]
 * --> the maximum frequency of any element is 2
 * --> return 2
*/

/**
 * --> nums = [5,11,20,20], k = 5, numOperations = 1
 * --> we can perform one operation
 * --> we can use the k of range [-5,5] to add to the selected index
 * ---> nums[1] + 0 = 11
 * --> now the array becomes [5,11,20,20]
 * --> the maximum frequency of any element is 2
 * --> return 2
 */


const maxFrequency = (nums, k, numOps) => {
    const maxVal = Math.max(...nums) + k + 2;
    const count = new Array(maxVal).fill(0);

    for (const v of nums)
        count[v]++;

    for (let i = 1; i < maxVal; i++)
        count[i] += count[i - 1];

    let res = 0;
    for (let i = 0; i < maxVal; i++) {
        const left = Math.max(0, i - k);
        const right = Math.min(maxVal - 1, i + k);
        const total = count[right] - (left ? count[left - 1] : 0);
        const freq = count[i] - (i ? count[i - 1] : 0);
        res = Math.max(res, freq + Math.min(numOps, total - freq));
    }

    return res;
};

console.log(maxFrequency([1, 4, 5], 1, 2)); //2