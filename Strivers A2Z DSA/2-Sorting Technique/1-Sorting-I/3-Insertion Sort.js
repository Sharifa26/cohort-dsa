//Insertion sort
//Takes an element & place it in its current order

function InsertionSort(arr){
    let n = arr.length;
    let count = 0
    for(let i=0;i<n;i++){
        let j=i;
        while(j>0 && arr[j-1]>arr[j]){
            [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
            j--;
            count++;
        }
    }
    console.log(count);
    return arr;
}

console.log(InsertionSort([5, 4, 3, 2, 1]));
