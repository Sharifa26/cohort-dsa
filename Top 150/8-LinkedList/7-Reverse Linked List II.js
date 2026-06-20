/**
 * Reverse Linked List IIReverse Linked List II
 * 
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

Follow up: Could you do it in one pass?
 */



class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// this approach is not working.
// var reverseBetween = function (head, left, right) {
//     let count = 0, dummy = null, temp = null;
//     let curr = head, prev = head, Nnext = new ListNode();

//     while (curr !== null) {
//         count++;

//         if (count >= left && count <= right) {
//             temp = dummy;
//             dummy = curr;
//             dummy.next = temp;

//         }
//         else if (count > right) {
//             Nnext.next = curr;
//             break;
//         }
//         curr = curr.next;
//     }
//     curr = head;
//     count = 0
//     while (curr !== null && count != right) {
//         count++;
//         if (count + 1 == left) {
//             curr.next = dummy;
//             break;
//         }
//         curr = curr.next;
//     }
//     curr.next = Nnext.next;

//     return head;
// };


// console.log(reverseBetween(head));


var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head;

    let dummy = new Node(0);
    dummy.next = head;

    let prevLeft = dummy;

    for (let i = 1; i < left; i++) {
        prevLeft = prevLeft.next;
    }

    let leftNode = prevLeft.next;

    let prev = null;
    let curr = leftNode;

    for (let i = left; i <= right; i++) {
        let next = curr.next;

        curr.next = prev;

        prev = curr;
        curr = next;
    }

    prevLeft.next = prev;
    leftNode.next = curr;

    return dummy.next;
};

console.log(reverseBetween(head, 2, 4));


/**
Time Complexity: O(n)
Space Complexity: O(1)
 */