/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

// function twosum(nums, target) {
//     nums = nums.sort((a,b) => a-b);
//     let left = 0, right = nums.length - 1;
//     while (left < right) {
//         let sum = nums[left] + nums[right];
//         if (sum == target) {
//             return [left, right];
//         }
//         else if (sum > target) {
//             right--;
//         }
//         else {
//             left++;
//         }
//     }
//     return [-1, -1];
// }

let nums = [3, 2, 4], target = 6;
//console.log(twosum(nums, target));


function Sort(nums,target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let compliment = target-nums[i];
        if(map.has(compliment)){
            return [map.get(compliment),i];
        }
        map.set(nums[i],i);
    }
    return [-1,-1];
}

console.log(Sort(nums,target));
