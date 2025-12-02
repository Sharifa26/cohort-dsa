/**
 * Intersection of Two Arrays
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 */


var intersection = function (nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], (map1.get(nums1[i]) || 0) +1);
    }
    for (let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], (map2.get(nums2[i]) || 0) + 1);
    }

    for(let i=0;i<nums1.length;i++){
        if (map1.has(nums1[i]) && map2.has(nums1[i]) && !ans.includes(nums1[i])){
            ans.push(nums1[i]);
        }
    }

    return ans;
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2]

//console.log(intersection(nums1,nums2));


/**
 * Time Complexity: 
 *                  nums1 = O(n)
 *                  nums1 = O(m)
 *                  ans.includes = O(k)
 *                  === O(n^2)
 * 
 * 
 * Space Complexity: O(n+m)
 */


var intersectionOptimize = function(nums1,nums2){
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let ans = [];

    for(let nums of set1){
        if(set2.has(nums)){
            ans.push(nums);
        }
    }
    return ans;
}

console.log(intersectionOptimize(nums1, nums2));

/**
 * Time Complexity: 
 * 
 *                  nums1 = O(n)
 *                  nums1 = O(m)
 *                  TC = O(n+m)
 * 
 * 
 * Space Complexity:nums1 = O(n)
 *                  nums1 = O(m)
 *                  SC = O(n+m)
 */