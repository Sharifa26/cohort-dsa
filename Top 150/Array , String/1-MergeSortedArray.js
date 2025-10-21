/**
 * Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/



let nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0], m = 6, nums2 = [1, 2, 2], n = 3;


/**
 * --> we have two sorted arrays
 * --> we have to merge both the arrays in sorted manner
 * --> we can use extra space to store the merged array and then sort it and copy it back to nums1
 * --> the nums1 should has length of m+n
 * --> if the m+n is not enough the we can Ignore the zeros at the end of nums1
 * --> finally return the nums1
 */

const twoMerge= function (nums1, m, nums2, n) {
    let arr = [];

    for (let i = 0; i < m; i++) {// adding elements of nums1 to arr
        if(nums1[i] !=0){
            arr.push(nums1[i]);
        }
    }
    for (let i = 0; i < n; i++) {// adding elements of nums2 to arr
        if(nums2[i] !=0){
            arr.push(nums2[i]);
        }
    }
    

    if(arr.length != m+n){// checking if length of arr is  not equal to m+n
        for (let i = arr.length; i < (m+n); i++) {// adding zeros to arr to make its length equal to m+n
            arr.push(0);
        }
    }

    for (let i = 0; i < arr.length; i++) {// copying elements of arr to nums1
        nums1[i] = arr[i];
    }

    return nums1.sort((a, b) => a - b);// sorting nums1 in non-decreasing order
    
}
/**
 * k = m+n
 * TC: O(k log k)
 * SC: O(k)
 */

//console.log(twoMerge(nums1, m, nums2, n));


// ---- Optimal Approach ----

const optimalMerge = function (nums1, m, nums2, n) {
    let p1 = m - 1; // pointer for nums1
    let p2 = n - 1;
    let i = m + n - 1; // pointer for merged array

    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
        i--;
    }
    return nums1;
}

/**
 * k = m+n
 * TC: O(k)
 * SC: O(1)
 */

console.log(optimalMerge(nums1, m, nums2, n));