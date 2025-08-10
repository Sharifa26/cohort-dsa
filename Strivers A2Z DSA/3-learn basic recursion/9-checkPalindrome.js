/**Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

Examples:

Example 1:
Input: Str =  “ABCDCBA”
Output: Palindrome
Explanation: String when reversed is the same as string.

Example 2:
Input: Str = “TAKE U FORWARD”
Output: Not Palindrome
Explanation: String when reversed is not the same as string*/


let str = "mom";
let n= str.length;

function check(i,str,n){
    str = str.toLowerCase();
    if( i >= Math.floor(n/2)){
        console.log('Palindrome');
    }
    else if(str[i] != str[n-i-1]){
        console.log('Not Palindrome');
    }
    else {
        check(i + 1, str, n);
    }
}

console.log(check(0,str,n));
