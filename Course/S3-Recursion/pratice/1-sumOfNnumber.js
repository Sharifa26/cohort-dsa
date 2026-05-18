// sum of n numbers

function sum(n){
    if(n == 0) return 0;

    return n+sum(n-1);
}

console.log(sum(5));



/**
Time complexity: O(n)
Space complexity: O(n)
*/