/**Union of Two Sorted Arrays
 * 
 * Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.
 * 
 * The union of two arrays can be defined as the common and distinct elements in the two arrays.
 * 
 * Input:n = 5,m = 5 arr1[] = {1,2,3,4,5}  arr2[] = {2,3,4,4,5}
Output: {1,2,3,4,5}
Explanation: Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1
Distnict Elemennts in arr2 are : No distinct elements.
Union of arr1 and arr2 is {1,2,3,4,5}

Input:n = 10,m = 7,arr1[] = {1,2,3,4,5,6,7,8,9,10}arr2[] = {2,3,4,4,5,11,12}
Output: {1,2,3,4,5,6,7,8,9,10,11,12}
Explanation: Common Elements in arr1 and arr2  are:  2,3,4,5
Distnict Elements in arr1 are : 1,6,7,8,9,10
Distnict Elemennts in arr2 are : 11,12
Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}
 */

function Union(arr1, n, arr2, m) {
    let i = 0, j = 0;
    let union = [];

    while (i < n && j < m) {
        if (arr1[i] <= arr2[j]) {
            if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
        } else {
            if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j]);
            }
            j++;
        }
    }

    while (i < n) {
        if (union.length === 0 || union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i]);
        }
        i++;
    }

    while (j < m) {
        if (union.length === 0 || union[union.length - 1] !== arr2[j]) {
            union.push(arr2[j]);
        }
        j++;
    }


    return union;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], arr2 = [2, 3, 4, 4, 5, 11, 12];

let n = arr1.length, m = arr2.length;

console.log(Union(arr1, n, arr2, m));

/**
- Time complexity: O(n+m)
- Space complexity: O(n+m)
*/