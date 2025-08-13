/**
 * Consider I have a Array with Non-Uniquie values like [1,3,2,1,3,1,4]
 * I want to count the element that how many times it occurs.
 */

let arr = [1,3,2,1,3,1,4];
let n= arr.length;
 

function count(arr){
    let newArr = [...new Set(arr)];
    let hash = new Array(n).fill(0);
    for(let i=0;i<n;i++){
        hash[arr[i]] += 1;
    }
    for(let i=0;i<newArr.length;i++){
        console.log(`the ${newArr[i]} appears - ${hash[newArr[i]]} times`);
        
    }
}

count(arr);