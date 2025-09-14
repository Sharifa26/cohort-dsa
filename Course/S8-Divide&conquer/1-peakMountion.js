/**
 Peak Index in a Mountain Array

 You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

Return the index of the peak element.

Your task is to solve it in O(log(n)) time complexity.

 

Example 1:

Input: arr = [0,1,0]

Output: 1

Example 2:

Input: arr = [0,2,1,0]

Output: 1

Example 3:

Input: arr = [0,10,5,2]

Output: 1
 */

var peakIndexInMountainArray = function (arr) {
    let n = arr.length;
    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
        if (arr[mid] > arr[mid + 1]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
};

console.log(peakIndexInMountainArray([0, 10, 5, 2]));


/**
 Time Complexity: O(log n)
 Space Complexity: O(1)
*/