// Merge Sort

//divide the array into two halves, sort each half and then merge the two sorted halves into a single sorted array.

var mergeSort = function (arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
};

function merge(left, right) {
    let result = [];
    let l=0,r=0;
    while (left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l++;

        } else {
            result.push(right[r]);
            r++;
        }
    }
    while ( r < right.length) {
        result.push(right[r]);
        r++;
    }
    while (l < left.length) {
        result.push(left[l]);
        l++;
    }
    return result;
}


console.log(mergeSort([9,5,0,4]));


/**
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */