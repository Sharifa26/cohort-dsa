//sum of N numbers:

function sum(n){
    if(n ==0) return 0;
    return n + sum(n-1)
}


//console.log(sum(2));

/**
sum(n):
TC = O(n)
SC = O(n)
**/


// fibonacci of n

function f(n){
    if(n == 1) return 0;
    if(n == 2) return 1;

    return f(n-2)+f(n-1);
}


console.log(f(8));

/**
f(n):
TC = O(2^n)
SC = O(n)
**/