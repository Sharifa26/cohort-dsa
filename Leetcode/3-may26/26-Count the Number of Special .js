/**
 * 3120. Count the Number of Special Characters I
 * 
 * You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

Return the number of special letters in word.

 

Example 1:

Input: word = "aaAbcBC"

Output: 3

Explanation:

The special characters in word are 'a', 'b', and 'c'.

Example 2:

Input: word = "abc"

Output: 0

Explanation:

No character in word appears in uppercase.

Example 3:

Input: word = "abBCab"

Output: 1

Explanation:

The only special character in word is 'b'.

 

Constraints:

1 <= word.length <= 50
word consists of only lowercase and uppercase English letters.
 */


var numberOfSpecialChars = function (word) {
    let n = word.length;
    let upper = new Array(26).fill(0);
    let lower = new Array(26).fill(0);
    let count = 0;

    for (let i = 0; i < n; i++) {
        let code = word.charCodeAt(i);

        if (code > 90) {
            lower[code - 97]++;
        }
        else {
            upper[code - 65]++;
        }
    }

    for (let i = 0; i < upper.length; i++) {
        if (upper[i] > 0 && lower[i] > 0) {
            count++;
        }
    }

    return count;

};

let word = "aaAbcBC"

console.log(numberOfSpecialChars(word));


/**
 * Time Complexity: O(n)
 * Space Complexity:O(1)
 */