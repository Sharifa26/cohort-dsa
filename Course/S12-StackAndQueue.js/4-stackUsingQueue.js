/**
 * Implement Stack using Queues
 * 
 * Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

Implement the MyStack class:

void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
Notes:

You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
*/


//TC - O(n) for push, O(1) for pop, top, empty
//SC - O(n)
// Your MyStack object will be instantiated and called as such:
var MyStack = function () {
    this.q1 = [];
    this.q2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */

// 1-Push element x onto stack.
// 2-While q1 is not empty, push all elements from q1 to q2.
// 3-Swap the names of q1 and q2.
MyStack.prototype.push = function (x) {
    this.q2.push(x);

    while (this.q1.length > 0) {
        this.q2.push(this.q1.shift());
    }

    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
};

/**
 * @return {number}
 */
// Remove the element on the top of the stack and returns it.
MyStack.prototype.pop = function () {
    return this.q1.shift();
};

/**
 * @return {number}
 */
// Get the top element.
MyStack.prototype.top = function () {
    return this.q1[0];
};

/**
 * @return {boolean}
 */
// Returns whether the stack is empty.
MyStack.prototype.empty = function () {
    return this.q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack.top());
console.log(myStack.pop());
myStack.push(5);
myStack.push(6);
console.log(myStack.empty());
console.log(myStack.top());
