/**
 * Longest Palindromic Substring
 * 
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */


// My Approach

var longestPalindrome = function (s) {
    let max = "";
    let n = s.length;

    let j=0;

    while(j<n){//O(n)
        for(let i=j;i<n;i++){//O(n)
            let substring = s.slice(j,i+1);

            //console.log(substring);
            if(checkpalindrome(substring)){
                max = substring.length > max.length ? substring : max;
                
            }
        }
        j++;
    }
    return max;
    
};

function checkpalindrome(s){//O(n)
    let left = 0, right = s.length - 1;

    while (left < right) {
        if(s[left] !== s[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;;
}

let s = "babad";

console.log(longestPalindrome(s));

/** 
 * Time Complexity : O(n^3)
 * space complexity : O(n)
 */

// Its giving me time limit exceeded error


