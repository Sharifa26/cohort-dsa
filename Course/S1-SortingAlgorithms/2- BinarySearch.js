/** Binary Search**/
// 1- if the Array is sorted in ascending order
//2- Search Something in the Array then we use Binary Search

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let traget = 5;

function binarySearch(arr, traget){
    let low =0;
    let high = arr.length - 1;

    while (low <= high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid] === traget){
            return mid;
        }
        else if(arr[mid]>traget){
            high = mid - 1;
        }
        else{
            low = mid +1;
        }
    }
    return -1;
}

console.log(binarySearch(arr, traget));