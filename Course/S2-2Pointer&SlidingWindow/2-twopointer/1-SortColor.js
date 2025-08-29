let arr = [2, 0, 2, 1, 1, 0];

function swap(i, j, num) {
    [num[i], num[j]] = [num[j], num[i]];
}

function sortColor(arr) {
    let left = 0, right = arr.length - 1, i = 0;
    while (i <= right) {
        if (arr[i] == 0) {
            swap(left, i, arr);
            left++;
            i++;
        }
        else if (arr[i] == 1) {
            i++;
        }
        else {
            swap(right, i, arr);
            right--;
        }
    }
    return arr;
}

console.log(sortColor(arr));
