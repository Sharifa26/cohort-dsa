// Quick Sort

//select a pivot element from the array and partition the array around the pivot element such that all elements on the left side of the pivot are less than the pivot and all elements on the right side of the pivot are greater than the pivot

var quickSort = function (arr) {
    if (arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);
    return [...leftSorted, pivot, ...rightSorted];
};

console.log(quickSort([9,5,0,4,8,3,2,1]));

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
*/

