/**
 * 
 * Find the Largest element in an array
 * 
 * Given an array, we have to find the largest element in the array.
 * Example 1:
Input:
 arr[] = {2, 5, 1, 3, 0}  
Output:
 5  
Explanation:
  
5 is the largest element in the array.

Example 2:
Input:
 arr[] = {8, 10, 5, 7, 9}  
Output:
 10  
Explanation:
  
10 is the largest element in the array.
 * 
 */

function bruteForce(arr) {
    let large = 0;
    for (let num of arr) {
        if (num > large) {
            large = num;
        }
    }
    return large;
}

let arr = [8, 10, 5, 7, 9, 20];
console.log(bruteForce(arr));


/**
 * Time complexity: O(n).
 * space complexity: O(1).
*/