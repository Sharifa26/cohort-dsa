/**
 * Intersection of Two Arrays II
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
 

Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], (map2.get(nums2[i]) || 0) + 1);
    }

    if (map2.size < map1.size) {
        [map1, map2] = [map2, map1];
    }

    for (let [key, value] of map1) {
        if (map2.has(key)) {
            let min = Math.min(map1.get(key), map2.get(key))
            for (let i = 0; i < min; i++) {
                ans.push(key);
            }
        }
    }
    return ans;
};

let nums1 = [1, 1], nums2 = [1, 2]

//console.log(intersect(nums1, nums2));

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


// ========= Optimized Way ==========

var intersectionOptimize = function (nums1, nums2) {
    let count = new Map();
    let ans = [];

    for (let num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    for (let num of nums2) {
        if (count.get(num) > 0) {
            ans.push(num);
            count.set(num, count.get(num) - 1);
        }
    }
    return ans;
}

console.log(intersectionOptimize(nums1, nums2));


/**
 * Time Complexity: 
 * 
 *                  nums1 = O(n)
 *                  ans = O(m)
 *                  TC = O(n+m)
 * 
 * 
 * Space Complexity:nums1 = O(n)
 *                  nums1 = O(m)
 *                  SC = O(n+m)
 */