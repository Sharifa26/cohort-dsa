/**Add Two Numbers
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
 */


function linked(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}



let LinkedList = new linked(9);
LinkedList.next = new linked(9);
LinkedList.next.next = new linked(9);
LinkedList.next.next.next = new linked(9);
LinkedList.next.next.next.next = new linked(9);
LinkedList.next.next.next.next.next = new linked(9);
LinkedList.next.next.next.next.next.next = new linked(9);


let LinkedList2 = new linked(9);
LinkedList2.next = new linked(9);
LinkedList2.next.next = new linked(9);
LinkedList2.next.next.next = new linked(9);



var addTwoNumbers = function (l1, l2) {
    let dummy = new linked();
    let temp = dummy;
    let curry = 0;
    while (l1 !== null || l2 !== null || curry !== 0) {
        let sum = curry;

        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;

        sum = val1 + val2 + curry;
        curry = Math.floor(sum / 10);

        temp.next = new linked(Math.floor(sum % 10));
        temp = temp.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummy.next;



};

console.log(addTwoNumbers(LinkedList, LinkedList2));



/**
Time complexity: O(max(n,m))
Space complexity: O(max(n,m))
*/