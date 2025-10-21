/**
 * Smallest Subsequence of Distinct Characters
 * 
 * Given a string s, return the lexicographically smallest subsequence of s that contains all the distinct characters of s exactly once.

Example 1:

Input: s = "bcabc"
Output: "abc"
Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
*/

// var Subsequence = function (s) {
//     let stack = [];

//     for (let i = 0; i < s.length; i++) {
//         let ch = s[i];

//         if (stack[stack.length - 1] > ch && !stack.includes(ch)) {
//             stack.pop();
//             stack.push(ch);
//         }
//         else if (!stack.includes(ch)) {
//             stack.push(ch);
//         }
//         else {
//             stack.push(ch);
//         }
//     }

//     return stack.join('');

// }

// console.log(Subsequence("cbacdcbc"));


var smallestSubsequence = function (s) {
    let stack = [];
    let seen = new Set();
    let count = {};

    for (let ch of s) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch of s) {
        count[ch]--; 

        
        if (seen.has(ch)) continue;

        while (stack.length && stack[stack.length - 1] > ch && count[stack[stack.length - 1]] > 0) {
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join('');
};

console.log(smallestSubsequence("cbacdcbc")); 


/**
 * TC - O(n)
 * SC - O(k)
 */