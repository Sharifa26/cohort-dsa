/**
 * Check whether a given number ’n’ is a palindrome number.

Note :
Palindrome numbers are the numbers that don't change when reversed.
You don’t need to print anything. Just implement the given function.
Example:
Input: 'n' = 51415
Output: true
Explanation: On reversing, 51415 gives 51415.
 */

let num = 12321;

function isPalindrome(num){
    let dup = num;
    let rev = 0;
    while(num >0){
        let last = num % 10;
        rev = (rev *10) + last;
        num = Math.floor(num / 10);
    }
    if(dup == rev){
        return true;
    }
    else{
        return false;
    }
}


console.log(isPalindrome(num));