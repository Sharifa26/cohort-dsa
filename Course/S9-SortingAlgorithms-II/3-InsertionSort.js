// Insertion Sort

//insert the current element into the sorted part of the array and shift the elements to the right until the correct position is reached

var insertionSort = function (arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }

    return arr;
};

console.log(insertionSort([9,5,0,4,8,3,2,1]));

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
*/