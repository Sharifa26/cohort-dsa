/**
 * Reverse Vowels of a String
 * 
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 */

/** My Approach */
var reverseVowels = function (s) {

    let vowels = ['a','A','e','E','i','I','o','O','u','U'];
    s = s.split('');

    //console.log(s);

    let left=0,right=s.length-1;

    while(left < right){
        if (vowels.includes(s[left]) && vowels.includes(s[right])){
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        }
        else if (vowels.includes(s[left]) && !vowels.includes(s[right])){
            right--;
        }
        else{
            left++;
        }
    }

    return s.join('');

};

let s = "IceCreAm";

console.log(reverseVowels(s));


/**
 * Time Complexity : O(n)
 * space complexity : O(n)
 */