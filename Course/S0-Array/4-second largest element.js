/**
 * Second Largest Element in an Array
 * 
 * 
 * Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

Note: If the second largest element does not exist, return -1.

Examples:
Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.

Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.

Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 there is no second largest element.
 */

function secondLargest(arr) {
    let first = -Infinity, sec = -Infinity;

    for (let num of arr) {
        if (num > first) {
            sec = first;
            first = num;
        }
        else if (num > sec && num !== first) {
            sec = num;
        }
    }

    return sec === -Infinity ? -1 : sec;
}

let arr = [-10, -10, -10];
console.log(secondLargest(arr));


/**
 * Time complexity: O(n).
 * space complexity: O(1).
*/