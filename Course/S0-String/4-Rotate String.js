/**Rotate String
 * 
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.
 

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false
 

Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
 */


var rotateString = function (s, goal) {

    let n = s.length;
    let i = 0;
    while (i < n) {
        let char = s[0];
        s = s.slice(1, n) + char;
        if (s === goal) {
            return true;
        }
        i++;
    }
    return false;
};

let s = "abcde", goal = "cdeab";

//console.log(rotateString(s, goal));


/**
- Time complexity: O(n^2)
- Space complexity: O(n)
 */

var optimal = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    let double = s + s;

    if (double.includes(goal)) {
        return true;
    }

    return false;
}

console.log(optimal(s, goal));


/**
- Time complexity: O(n)
- Space complexity: O(n)
 */