//Bubble Sort 
//Push the max element to last by Adjecent swaps of first two Element 
//push the max element to last by Adjecent swaps of second two Element
//so on....



function BubbleSort(arr){
    let n = arr.length;
    let CountSwap = 0;
    for(let i=n-1;i>=1;i--){
        for(let j=0;j<=i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                CountSwap++;
            }
        }
        //console.log(arr);
        if(CountSwap == 0){
            break;
        }
    }
    console.log(CountSwap);
    return arr
}


console.log(BubbleSort([1,3,6,9,10]));
