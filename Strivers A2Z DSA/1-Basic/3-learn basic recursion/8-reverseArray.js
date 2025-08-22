/**Problem Statement: You are given an array. The task is to reverse the array and print it. 

Example 1:
Input: N = 5, arr[] = {5,4,3,2,1}
Output: {1,2,3,4,5}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on.

Example 2:
Input: N=6 arr[] = {10,20,30,40}
Output: {40,30,20,10}
Explanation: Since the order of elements gets reversed the first element will occupy the fifth position, the second element occupies the fourth position and so on. */




let arr = [5, 4, 3, 2, 1];

let N = arr.length;
function reverse(l, r) {
    if (l >= r) {
        return;
    }
    [arr[l], arr[r]] = [arr[r], arr[l]];
    reverse(l + 1, r - 1);
}

// console.log(reverse(0, N - 1));

// console.log(arr);


let newArr = [ 100 , 200 , 4 ,6 ,3, 10000];

let n = newArr.length;

function rev(i,newArr,n){
    if(i >= Math.floor(n/2)){
        return;
    }
    [newArr[i], newArr[n - i - 1]] = [newArr[n - i - 1], newArr[i]];
    rev(i+1,newArr,n);
}

console.log(rev(0,newArr,n));

console.log(newArr);



