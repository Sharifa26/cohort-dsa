/**Problem Statement: Given a number X,  print its factorial.

Example 1:
Input: X = 5
Output: 120
Explanation: 5! = 5 * 4 * 3 * 2 * 1

Example 2:
Input: X = 3
Output: 6
Explanation: 3 != 3 * 2 * 1 **/


//Functional Recursion
function fact(n){
    if(n==1){
        return 1;
    }
    return n * fact(n-1);
}

//parameterised way
function f(n,fa){
    if(n==1) {
        console.log(fa);
        return;
    }
    f(n-1,fa *n);
}
// console.log(fact(5));
// console.log(f(5,1));

function factorial(n){
    let result = 1n;
    if( n==0 || n==1){
        return 1n;
        
    }
    else {
        for (let i = 2n; i <= BigInt(n);i++){
            result *= i;
        }
        return result
    }
    
}

console.log(factorial(1).toString());


