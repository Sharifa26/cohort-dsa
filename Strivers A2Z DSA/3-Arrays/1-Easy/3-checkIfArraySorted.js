//check if the Array is sorted or not ,if yes the return true else return false.

function check(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i] >= arr[i-1]){

        }
        else{
            return false;
        }
    }
    return  true;
}

console.log(check([1,9,3,4,5,6]));

/**
    TC - O(N)
    SC - O(1)
*/