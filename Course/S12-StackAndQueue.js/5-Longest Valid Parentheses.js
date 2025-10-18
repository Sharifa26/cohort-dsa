/**
 * Longest Valid Parentheses
 * 
 * Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 */


var longestValidParentheses = function (s) {
    // if (s === '') return 0;
    // let stack = [];
    // let count = 0;

    // let map = {
    //     ')': '('
    // }

    // for (let i = 0; i < s.length; i++) {
    //     let ch = s[i]
    //     if (ch == '(') {
    //         stack.push(ch);
    //     }
    //     else if (map[ch] == stack[stack.length - 1]) {
    //         count +=2;
    //         stack.pop();
    //     }
    // }
    // return count;

    let maxLen = 0;
    let stack = [-1];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLen;
};

console.log(longestValidParentheses("()(()"));
