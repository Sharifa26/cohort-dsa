// Bubble Sort

//compare adjacent elements and swap them if they are in the wrong order

var bubbleSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};

console.log(bubbleSort([9,5,0,4,8,3,2,1]));

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)    
*/