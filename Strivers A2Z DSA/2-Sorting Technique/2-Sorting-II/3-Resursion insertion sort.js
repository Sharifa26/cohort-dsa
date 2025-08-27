/**
 * Problem Statement: Given an array of N integers, write a program to implement the Recursive Insertion Sort algorithm.

Examples:

Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting we get 9,13,20,24,46,52
 */


function recursiveInsertionSort(arr, i = 1) {
    if (i === arr.length) return arr;

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
    }
    return recursiveInsertionSort(arr, i + 1);
}

// Example usage:
let arr = [5, 1, 4, 2, 8];
console.log(recursiveInsertionSort(arr)); // [1, 2, 4, 5, 8]
