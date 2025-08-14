/**
 * You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.

 

Example 1:

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
Example 2:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.
 */

function count(arr) {
    let count =0;
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        else {
            map.set(arr[i], 1);
        }
    }
    //find the max key values
    let max = Math.max(...map.values())

    //compare it with all elements
    for(let value of map.values()){
        if(max == value){
            count += value;
        }
    }
    return count
    
}

console.log(count([1, 2, 3, 4, 5]));


//Time complexity and space
/** TC == N+N+N 
 *      = 3N
 *      = O(N)
 * 
 *  SC == O(N) 
*/