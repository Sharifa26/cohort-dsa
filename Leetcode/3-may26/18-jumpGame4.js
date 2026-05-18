/**
 * 1345. Jump Game IV
 * 
 * Given an array of integers arr, you are initially positioned at the first index of the array.

In one step you can jump from index i to index:

i + 1 where: i + 1 < arr.length.
i - 1 where: i - 1 >= 0.
j where: arr[i] == arr[j] and i != j.
Return the minimum number of steps to reach the last index of the array.

Notice that you can not jump outside of the array at any time.

 

Example 1:

Input: arr = [100,-23,-23,404,100,23,23,23,3,404]
Output: 3
Explanation: You need three jumps from index 0 --> 4 --> 3 --> 9. Note that index 9 is the last index of the array.
Example 2:

Input: arr = [7]
Output: 0
Explanation: Start index is the last index. You do not need to jump.
Example 3:

Input: arr = [7,6,9,6,9,6,9,7]
Output: 1
Explanation: You can jump directly from index 0 to index 7 which is last index of the array.
 

Constraints:

1 <= arr.length <= 5 * 104
-108 <= arr[i] <= 108
 */

var minJumps = function (arr) {
    let n = arr.length;
    if (n === 1) return 0;
    let map = new Map();

    for(let i=0;i<n;i++){
        if(!map.has(arr[i])){
            map.set(arr[i],[]);
        }
        map.get(arr[i]).push(i);
    }
    
    let visited = new Array(n).fill(false);
    let queue = [0];
    visited[0] = true;
    let count =0;

    while(queue.length > 0){
        let size = queue.length;

        for(let s=0;s<size;s++){
            let curr = queue.shift();

            if(curr == n-1){
                return count;
            }

            const nextPossible = [];

            nextPossible.push(curr+1);
            nextPossible.push(curr-1);

            if(map.has(arr[curr])){
                nextPossible.push(...map.get(arr[curr]));
            }

            for(let next of nextPossible){
                if(next >= 0 && next < n && !visited[next]){
                    visited[next] = true;
                    queue.push(next);
                }
            }

            map.delete(arr[curr]);
        }
        count++;
    }

    return -1;
};

let arr = [100, -23, -23, 404, 100, 23, 23, 23, 3, 404];

console.log(minJumps(arr));
