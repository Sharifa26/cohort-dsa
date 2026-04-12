/**Length of Loop in Linked List
 * 
 * Problem Statement: Given the head of a linked list, determine the length of a loop present in the linked list. If there's no loop present, return 0.
 * 
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
LinkedList.next.next.next.next.next.next = new linked(7);
LinkedList.next.next.next.next.next.next.next = new linked(8);
LinkedList.next.next.next.next.next.next.next.next = new linked(9);


let temp = LinkedList;

let CycleNode = LinkedList.next.next;

while (temp.next !== null) {
    temp = temp.next;
}

temp.next = CycleNode;


//Brute Force Approach
var Length = function (head) {
    let temp = head;
    let timer = 0;
    let map = new Map();

    while (temp !== null) {
        if (map.has(temp)) {
            timer = timer - map.get(temp);
            break;
        }
        map.set(temp, timer);

        temp = temp.next;

        timer++;
    }

    return timer;
}

//console.log(Length(LinkedList));


/**
Time complexity: O(n)
Space complexity: O(n)
*/

var findLength = function (head) {
    let slow = head, fast = head;
    let IsCycle = false;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            IsCycle = true;
            break;
        }
    }

    if (!IsCycle) return 0;

    fast = slow.next;
    let count = 1;

    while (slow !== fast) {
        count++;
        fast = fast.next;
    }

    return count;
}

console.log(findLength(LinkedList));

/**
Time complexity: O(n)
Space complexity: O(1)
*/