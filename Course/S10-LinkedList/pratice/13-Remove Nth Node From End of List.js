/**Remove Nth Node From End of List
 * 
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass?
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

var removeNthFromEnd = function (head, n) {
    if (head == null) return null;

    let temp = head;
    let count = 0;

    while (temp !== null) {
        temp = temp.next;
        count++;
    }

    if (n === count) {
        return head.next;
    }

    let target = count - n;
    temp = head;

    while (temp !== null) {
        if (target == 1) break;
        temp = temp.next;
        target--;
    }

    if (temp.next !== null) {
        temp.next = temp.next.next;
    }

    return head;
};

//let result = removeNthFromEnd(LinkedList, 3)

/**
- Time complexity: O(N)
- Space complexity: O(1)
 */

var optimize = function (head, n) {
    let dummy = new linked(0, head);

    let slow = dummy;
    let fast = dummy;

    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

/**
- Time complexity: O(N)
- Space complexity: O(1)
 */

let result = optimize(LinkedList, 4)


function print(list) {
    let current = list;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}

print(result);
