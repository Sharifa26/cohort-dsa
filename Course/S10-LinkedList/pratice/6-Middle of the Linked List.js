/**Middle of the Linked List
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100
 */


/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function linked(val, next) {
    this.val = (val == undefined) ? 0 : val;
    this.next = (next == undefined) ? null : next;
}

let LinkedList = new linked(1);
LinkedList.next = new linked(2);
//LinkedList.next.next = new linked(3);
// LinkedList.next.next.next = new linked(4);
// LinkedList.next.next.next.next = new linked(5);
// LinkedList.next.next.next.next.next = new linked(6);

// My Approach
var middleNode = function (head) {
    let count = 0;
    let current = head;
    let element = 0;

    while (current !== null) {//O(n)
        count++;
        current = current.next;
    }

    element = Math.floor(count / 2) + 1;
    current = head;

    while (head !== null) {//O(n/2)
        element--;

        if (element == 0) {
            break;
        }
        current = current.next;
    }
    return current;
};

//console.log(middleNode(LinkedList));

/**
Time complexity: O(n)+ O(n/2)
Space complexity: O(1)
 */

function Optimize(head) {
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

console.log(Optimize(LinkedList));

/**
Time complexity: O(n)
Space complexity: O(1)
 */

//console.log(LinkedList);
// function print(list) {
//     let current = list;
//     while (current !== null) {
//         console.log(current.val);
//         current = current.next;
//     }
// }

// print(LinkedList);