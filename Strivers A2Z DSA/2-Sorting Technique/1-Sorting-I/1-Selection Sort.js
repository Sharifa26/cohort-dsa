// Selection sort
// finsd the minimum ellement in the array and swap it with the first element
// then find the minimum element in the rest of the array and swap it with the second element
// and so on

function SelectionSort(arr){
    let n = arr.length;
    let CountSwap = 0;
    for(let i=0;i<=n-2;i++){
        let min = i;
        for(let j=i;j<=n-1;j++){
            if(arr[j] < arr[min]) {
                min = j;
                CountSwap++;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
        //console.log(arr);
        if (CountSwap == 0) {
            break;
        }
    }
    console.log(CountSwap);
    return arr;
}

console.log(SelectionSort([13,46,24,52,20,9]));
