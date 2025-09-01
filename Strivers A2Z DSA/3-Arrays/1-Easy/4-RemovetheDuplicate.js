//Remove the duplicate Element in the array.


function duplicate(arr){
    arr = new Set(arr);
    return arr;
}

console.log(duplicate([1,2,2,3,4,4,5,6,6,7]));
