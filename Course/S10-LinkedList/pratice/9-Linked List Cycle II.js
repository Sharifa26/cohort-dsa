/**Linked List Cycle II
 * 
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
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

// Create cycle (6 → 3)
let temp = LinkedList;

// move to node with value 3
let cycleNode = temp.next.next; // node 3

// move to last node (6)
while (temp.next !== null) {
    temp = temp.next;
}

// connect last node to node 3
temp.next = cycleNode;



var BruteForce = function (head) {
    let map = new Map();
    let current = head;

    while (current !== null) {
        if (map.has(current)) return current;
        map.set(current, 1);

        current = current.next
    }
    return null;
}

/**
Time complexity: O(n)
Space complexity: O(n)
*/


var detectCycle = function (head) {
    let IsCycle = false;
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            IsCycle = true;
            break;
        }
    }
    if (!IsCycle) return null;

    slow = head;

    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow
};

console.log(BruteForce(LinkedList));


/**
Time complexity: O(n)
Space complexity: O(1)
*/