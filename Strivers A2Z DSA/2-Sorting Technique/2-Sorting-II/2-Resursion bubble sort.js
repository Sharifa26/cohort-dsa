function recursiveBubbleSort(arr, n = arr.length) {
    if (n === 1) return arr;

    let swapped = false;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            swapped = true;
        }
    }

    if (!swapped) return arr;
    return recursiveBubbleSort(arr, n - 1);
}

// Example usage:
//console.log(recursiveBubbleSort([1, 3, 6, 9, 10]));
console.log(recursiveBubbleSort([5, 1, 4, 2, 8]));
