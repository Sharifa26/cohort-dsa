/**
 * First Unique Character in a String
 * 
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
 */

//Using Array
const UniqueCharacter = (s) => {
    let arr = new Array(length = 26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 97;

        arr[idx] += 1;

    }

    for (let i = 0; i < s.length; i++) {
        let idx = s.charCodeAt(i) - 97;
        if(arr[idx] == 1){
            return i;
        }
    }

    return -1;
}

console.log(UniqueCharacter('ssarifa'));

/**
 * TC - O(n)
 * SC - O(1)
 */



// Using Map 
var firstUniqChar = function (s) {
    let map = new Map();
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};


//console.log(firstUniqChar('eetcode'));

/**
 * TC - O(n)
 * SC - O(1)
 */
