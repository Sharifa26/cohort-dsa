/**
 * 
 * Problem Statement: Given an integer N, return all divisors of N.

A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

Example 1:
    Input:N = 36
    
    Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]
    
    Explanation: The divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, 36.
                            
    Example 2:
    Input:N =12                
    
    Output: [1, 2, 3, 4, 6, 12]
    
    Explanation: The divisors of 12 are 1, 2, 3, 4, 6, 12.         
 */

function divisors(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    return arr;
}

function optimsedDivisors(n) {
    let arr = [];
    
    for(let i=1;i<=Math.sqrt(n);i++){
        if(n%i == 0){
            arr.push(i);
            if(Math.floor(n/i) != i){
                arr.push(Math.floor(n/i));
            }
        }
    }
    let res = arr.sort((a, b) => a - b);
    res.forEach((a) => {
        process.stdout.write(a)
    })
}

console.log(optimsedDivisors(25));

