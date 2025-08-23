/**
 * Find the Maximum sum of All k size of subArray.

Example 1:
Input: arr = [3,5,2,7,1,4], k=3
Output: 14
 */

function Max(arr, k) {
    let n = arr.length
    let max = 0;
    for (let i = 0; i <= n - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
        }
        //console.log(sum);
        if (max < sum) {
            max = sum;
        }
    }
    return max;
}


//console.log(Max([3, 5, 2, 7, 1, 4],3));

/**
 * TC = (n-k)*k
 *    = nk - k^2
 *    =O(nk)
 */

function slidingWindow(arr, k) {
    let start = 0, sum = 0, max = 0, n = arr.length;
    for (let end = 0; end < n; end++) {
        sum += arr[end]
        if ((end - start + 1) == k) {
            if (max < sum) max = sum;
            sum -= arr[start];
            start++;
        }
    }
    return max;
}

console.log(slidingWindow([3, 5, 2, 7, 1, 4], 3));
