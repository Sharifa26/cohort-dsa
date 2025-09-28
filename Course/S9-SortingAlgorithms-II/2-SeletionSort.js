// Selection Sort

//select the smallest element from the unsorted part of the array and swap it with the first element of the unsorted part and repeat the process until the unsorted part is empty


var selectionSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }

    return arr;
};


console.log(selectionSort([9,5,0,4]));


/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
*/