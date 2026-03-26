/**
 * Valid Palindrome II
 * 
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
 */

// My Approach
var validPalindrome = function (s) {
    if (s.length === 0 || s.length === 1) return true;
    let count = 0;
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] == s[right]) {
            count += 2;
        }
        left++;
        right--;
    }

    return count == s.length - 1;
};

const s = "abca";
//console.log(validPalindrome(s));


// Optimized Approach
var validPalindrome1 = function (s) {

    function isPlaindrome(l,r){
        while(l<r){
            if(s[l] != s[r]) return false;
            l++;
            r--;
        }
        return true;
    }

    let left = 0, right = s.length -1;
    while(left < right){
        if(s[left] == s[right]){
            left++;
            right--;
        }else{
            return isPlaindrome(left +1,right) || isPlaindrome(left,right-1);
        }
    }
    return true;
}

console.log(validPalindrome1(s));

/**
    Time complexity: O(n)
    Space complexity: O(1)
*/
