/**
 * Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
 * 
 * Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.
*/

//Time Complexity & Space Complexity.
/**
    Brute Force : TC- O(N log N)+O(N), SC- O(1).
    Better: TC- O(2N), SC- O(1).
    Optimize: TC - O(N), SC- O(1).
*/



//Brute force Approach
function BruteForce(arr) {
    arr.sort((a, b) => a - b);
    let n = arr.length;
    let large = arr[n-1];
    let second = -1;
    for(let i= n-1;i>=0;i--){
        if(arr[i] != large){
            second = arr[i];
            break;
        }
    }
    return second;
}
//console.log(BruteForce([10, 10, 10]));
/**
 * TC - O(N log N) + O(N).
 * SC - O(1)
*/


//Better Approach
function Better(arr){
    let large = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i];
        }
    }
    let second =-1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > second && arr[i] != large) {
            second = arr[i];
        }
    }
    return second;
}

//console.log(Better([12, 35, 1, 10, 34, 1]));
/**
 * TC - O(N+N)
 *      O(2N)
 * 
 * SC - O(1)
*/



//Optimize Apporach 
function optimize(arr){
    let n = arr.length;
    let large = arr[0];
    let second = -1;
    for (let i = 1; i < n; i++) {
        if (arr[i] > large) {
            second = large;
            large = arr[i];
        }
        else if(arr[i] < large && arr[i] > second){
            second = arr[i];
        }
    }
    return second;
}

//console.log(optimize([28078,19451,935,28892,2242,3570,5480,231]));
/**
 * TC - O(N)
 * 
 * SC - O(1)
*/


//second small 
function secsmall(arr){
    let n=arr.length;
    let small = arr[0];
    let secS = Infinity;
    for(i=1;i<n;i++){
        if(arr[i] < small){
            secS = small;
            small = arr[i];
        }
        else if(arr[i] != small && arr[i] < secS){
            secS = arr[i];
        }
    }
    return secS;
}

console.log(secsmall([12, 35, 1, 10, 34, 1]));
