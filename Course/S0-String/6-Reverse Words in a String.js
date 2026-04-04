/**Reverse Words in a String
 * 
 * Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
 

Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?


 */



//brute force 

var bruteForce = function (s) {
    let words = [];

    let word = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word += s[i];
        } else if (word.length > 0) {
            words.push(word);
            word = '';
        }
    }
    if (word.length > 0) {
        words.push(word);
    }

    let i = 0, j = words.length - 1;
    while (i < j) {
        [words[i], words[j]] = [words[j], words[i]];
        i++;
        j--;
    }

    return words.join(' ');

}

// let s = "  hello world  ";
// console.log(bruteForce(s));

/**
 * Time complexity: O(n)
 * space complexity: O(n)
 */




//My Approach
var reverseWords = function (s) {
    // s = s.split(' ');
    // let i = 0, j = s.length - 1;
    // while (i < j) {
    //     if (s[i] !== '' && s[j] !== '') {
    //         [s[i], s[j]] = [s[j], s[i]];
    //         i++;
    //         j--;
    //     }
    //     else if (s[i] === '' && s[j] !== '') {
    //         i++;
    //     }
    //     else {
    //         j--;
    //     }
    // }

    // s = s.filter((item) => item != '');
    // return s.join(' ');

    s = s.split(' ').filter((item) => item !== '');

    let i = 0, j = s.length - 1;
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }

    return s.join(' ');
};

let s = "a good   example";
console.log(reverseWords(s));

/**
 * Time complexity: O(n)
 * space complexity: O(n)
 */