/**
 *  highest/lowest frequency element
 * Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.

Example 2:

Input: array[] = {2,2,3,4,4,2};
Output: 2 3
Explanation: The frequency of 2 is 3, i.e. the highest and the frequency of 3 is 1 i.e. the lowest.
 */

function count(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }
    let maxFreq = -Infinity, minFreq = Infinity;
    let maxElem = null, minElem = null;

    for (let [key, value] of map) {
        if (value > maxFreq) {
            maxFreq = value;
            maxElem = key;
        }
        if (value < minFreq) {
            minFreq = value;
            minElem = key;
        }
    }

    return { maxElem, minElem };
    
}

console.log(count([2, 2, 3, 4, 4, 2]));

//Time complexity and space
/** TC == N+N
 *      = 2N
 *      = O(N)
 * 
 *  SC == O(N) 
*/