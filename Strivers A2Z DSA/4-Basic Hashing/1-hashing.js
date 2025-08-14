/**
 * Consider I have a Array with Non-Uniquie values like [1,3,2,1,3,1,4]
 * I want to count the element that how many times it occurs.
 */

// Note :that the hashing only works if the hash array size is less than 10^7 if it is not gobally defined.
// if its is gobally defined the it will work for grater than 10^7.

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

//count(arr);

//Character hashing 
//In character hashing we dont worry about the array size bcoz the max size of a character array is 256.

function charCount(c,s){
    let hash = new Array(256).fill(0);

    for (let i = 0; i < s.length; i++) {
        let idx = s[i].charCodeAt(0); // 0–255
        hash[idx] += 1;
    }

    console.log(`${c} occurs - ${hash[c.charCodeAt(0)]}`);
    
}

//charCount('1','sharif&a1A');


// Mapping works with key -> value 
//key - number
//value - frequency
//map.set(key,value).

// map is benificial bcoz it stores the value so, it takes less memory.

function frequency(arr){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i])+1);
        }
        else {
            map.set(arr[i], 1);
        }
    }
    return map;
}

console.log(frequency(arr));
