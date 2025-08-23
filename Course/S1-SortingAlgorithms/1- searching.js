/** search a element in an array**/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let traget = 5;

function search(arr, traget){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === traget){
            return i;
        }
    }
    return -1;
}

console.log(search(arr, traget));