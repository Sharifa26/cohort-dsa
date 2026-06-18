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

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// List 1: 2 → 4 → 3
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

// List 2: 5 → 6 → 4
let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);



var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(), temp = dummy;
    let list1 = l1, list2 = l2
    let curry = 0, rem = 0

    while (list1 !== null || list2 !== null || curry !== 0) {
        let sum = 0;

        let v1 = list1 !== null ? list1.val : 0;
        let v2 = list2 !== null ? list2.val : 0;

        sum = v1 + v2 + curry;

        curry = Math.floor(sum / 10);

        rem = sum % 10;

        let next = new ListNode(rem);

        temp.next = next;

        temp = temp.next;

        if (list1 !== null) list1 = list1.next;
        if (list2 !== null) list2 = list2.next;
    }

    return dummy.next;
};

var optimize = function (l1, l2) {
    let dummy = new ListNode(), temp = dummy;
    let curry = 0;

    while (l1 !== null || l2 !== null || curry !== 0) {
        let sum = curry;

        if (l1 !== null) {
            sum += l1.val;
        }

        if (l2 !== null) {
            sum += l2.val;
        }

        curry = Math.floor(sum / 10);
        let rem = sum % 10;

        let node = new ListNode(rem);
        temp.next = node;
        temp = temp.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next;
}


console.log(optimize(l1, l2));


/**
 * TC - O(max(n,m))
 * SC - O(max(n,m))
 */