/**Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

Examples:

Example 1:
Input: N=5
Output: 15
Explanation: 1+2+3+4+5=15

Example 2:
Input: N=6
Output: 21
Explanation: 1+2+3+4+5+6=21*/

//parameterised way
function sum(n,s){
    if(n < 1) {
        console.log(s);
        return;
    }
    sum(n-1,s+n);
}

//Functional Recursion
function add(n){
    if(n==0){
        return 0;
    }
    return n+add(n-1)
}


// sum(6,0);

console.log(add(5));
