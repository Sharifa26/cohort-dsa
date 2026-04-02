/**
 * 14. Longest Common Prefix
 * 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */


// My Approach 
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];

    let res = "";
    let first = strs[0];

    for (let i = 0; i < first.length; i++) {
        let char = first[i];

        let count = 0;

        for (let word of strs) {
            if (i >= word.length) return res;

            if (char === word[i]) count++;
        }

        if (count === strs.length) {
            res += char;
        } else {
            return res;
        }
    }

    return res;
};
let strs = ["flower", "flow", "flight"];

//console.log(longestCommonPrefix(strs));

/**
 * Time complexity: O(n x m).
 * space complexity: O(1).
*/


// Optimized approach

var longestCommonPrefix1 = function (strs) {
    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;

    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);
};


/**
 * Time complexity: O(n log n × m)
 * space complexity: O(1).
*/


var Optimized = function (strs) {
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (i == strs[j].length || strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}

console.log(Optimized(strs));

/**
 * Time complexity: O(n x m).
 * space complexity: O(1).
*/