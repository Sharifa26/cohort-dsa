/**Reverse Linked List IIReverse Linked List II
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


var reverseBetween = function (head, left, right) {
    if (head == null || head.next == null) return null;

    let swap1 = new Node(),swap = swap1 , prev = null, curr = head;
    let count = 0;

    while (count <= right && curr) {
        count++;
        if (count <= right && count >= left) {
            swap.next = curr.next;
            swap = swap.next;
        }
        else if (count < left) {
            prev = curr;
        }
        curr = curr.next;
    }
    prev.next = swap.next;
    swap1.next = curr;
    curr = head;

    return head;
};


console.log(reverseBetween(head, 2, 4));
