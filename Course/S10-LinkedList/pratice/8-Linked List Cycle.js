/**Linked List Cycle
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?
 */


function linked(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}

let LinkedList = new linked(1);
LinkedList.next = new linked(2);
LinkedList.next.next = new linked(3);
LinkedList.next.next.next = new linked(4);
LinkedList.next.next.next.next = new linked(5);
LinkedList.next.next.next.next.next = new linked(6);

// // Create cycle (6 → 3)
// let temp = LinkedList;

// // move to node with value 3
// let cycleNode = temp.next.next; // node 3

// // move to last node (6)
// while (temp.next !== null) {
//     temp = temp.next;
// }

// // connect last node to node 3
// temp.next = cycleNode;

var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};

console.log(hasCycle(LinkedList));

/**
Time complexity: O(n)
Space complexity: O(1)
 */