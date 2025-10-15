/**
 * Evaluate Reverse Polish Notation
 * 
 * You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
*/

function evaluateRPN(tokens) {
    let stack = [];

    for(let i = 0; i < tokens.length; i++) {
        if(isOperator(tokens[i])) {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let result = calculateexpression(op1, op2, tokens[i]);
            stack.push(result);
        }
        else{
            stack.push(parseInt(tokens[i]));
        }
    }

    return stack[stack.length-1];
}

function isOperator(ch) {
    if(ch == '+' || ch == '-' || ch == '*' || ch == '/') return true;
    return false;
}

function calculateexpression(op1, op2, op) {
    if(op == '+'){
        return op2 + op1;
    }
    else if(op == '-') {
        return op2 - op1;
    }
    else if(op == '*') {
        return op2 * op1;
    }
    else{
        return Math.trunc(op2 / op1);
    }
}

console.log(evaluateRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));