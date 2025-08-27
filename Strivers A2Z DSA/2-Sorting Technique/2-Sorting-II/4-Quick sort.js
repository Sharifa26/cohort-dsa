// function swap([i],[j]){
//     [[i],[j]] = [[j],[i]];
// }

function partition(arr,low,high){
    let pivot = arr[low];
    let i = low;
    let j = high;
    while(i < j){
        while(arr[i] <= pivot && i <= high-1){
            i++;
        }
        while(arr[j] > pivot && j >= low +1){
            j--;
        }
        if(i<j){
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[low],arr[j]] = [arr[j],arr[low]];
    return j;
}

function quickSort(arr,low,high){
    if(low < high){
        let pIndex = partition(arr,low,high);
        quickSort(arr,low,pIndex-1);
        quickSort(arr,pIndex+1,high);
    }
    return arr;
}

let arr = [4,6,8,9,5,3,1,2,7];

console.log(quickSort(arr,0,arr.length-1));
