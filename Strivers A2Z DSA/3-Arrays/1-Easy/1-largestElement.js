//Find the Largest Element in the array.

/**
 * Given an array arr[]. The task is to find the largest element and return it.
 * 
 * Input: arr[] = [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of the given array is 90.
Input: arr[] = [5, 5, 5, 5]
Output: 5
Explanation: The largest element of the given array is 5.
*/

//Time Complexity & Space Complexity.
/**
    Brute Force : TC- O(N log N), SC- O(1).
    Better and Optimize : TC- O(N), SC- O(1)
*/




//Brute force Approach
function BruteForce(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1]
}

//console.log(BruteForce([1, 8, 7, 56, 9]));
/**
    TC - O(N log N)
    SC - O(1)
*/


//Better and optimize Approach
function Better(arr) {
    let large = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    return large;
}

//console.log(Better([1, 8, 7, 56, 90]));

/**
 * TC - O(N)
 * SC - O(1)
*/