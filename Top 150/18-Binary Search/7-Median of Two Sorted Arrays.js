/**
 * Median of Two Sorted Arrays
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */


var findMedianSortedArrays = function (nums1, nums2) {
    let p1 = 0, p2 = 0, n = nums1.length, m = nums2.length;
    let arr = [];

    while (p1 < n && p2 < m) {
        if (nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1]);
            p1++;
        }
        else {
            arr.push(nums2[p2]);
            p2++;
        }
    }

    while (p1 < n) {
        arr.push(nums1[p1]);
        p1++;
    }
    while (p2 < m) {
        arr.push(nums2[p2]);
        p2++;
    }
    let a = arr.length - 1;
    let ans = 0;
    if (a % 2 == 0) {
        ans = Math.floor(a / 2);
        return arr[ans];
    }

    ans = Math.floor(a / 2);

    let sum = arr[ans] + arr[ans + 1];

    return sum / 2;
};

let nums1 = [1, 2], nums2 = [3]

console.log(findMedianSortedArrays(nums1, nums2));


/**
Time  : O(n + m)
Space : O(n + m)
 */