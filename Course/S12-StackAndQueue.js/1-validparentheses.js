/**
 * Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false
*/


function isValid(s) {
    if(s.length == 0) return true;
    let stack = [];
    let map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for(let i = 0; i < s.length; i++) {
        let ch = s[i];

        if(ch == '(' || ch == '[' || ch == '{') {
            stack.push(ch);
        }
        else{
            if(stack.length == 0 || map[ch] != stack[stack.length-1]){
                return false;
            }
            stack.pop();
        }
    }

    return stack.length == 0;
}

console.log(isValid('()'));