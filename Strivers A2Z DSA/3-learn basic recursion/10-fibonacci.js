/**Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

Examples:

Example 1:
Input: N = 5
Output: 0 1 1 2 3 5
Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)

Example 2:
Input: 6

Output: 0 1 1 2 3 5 8
Explanation: 0 1 1 2 3 5 8 is the fibonacci series upto 6th term.(o based indexing) */


function fibonacci(n){
    if(n<=1){
        return n;
    }
    let last = fibonacci(n-1);
    let slast = fibonacci(n-2);
    return last+slast;
}


console.log(fibonacci(11));


/**
 * Time Complexity - 2^n
 * Space Complexity - O(n)
 */