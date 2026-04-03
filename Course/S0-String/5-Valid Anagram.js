/**
 * Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let mapS = new Map(), mapT = new Map();//O(2n)

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], (mapS.get(s[i]) || 0) + 1);
        mapT.set(t[i], (mapT.get(t[i]) || 0) + 1);
    }

    for (let num of s) {
        if (mapS.get(num) !== mapT.get(num)) return false;
    }
    return true;
};

let s = "rat", t = "car"
// console.log(isAnagram(s,t));


/**
 * Time complexity: O(n)
 * space complexity: O(n)
 */

var Optimal = function (s, t) {
    if (s.length !== t.length) return false;

    let arr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let val = s.charCodeAt(i);
        arr[val - 97] += 1;
    }
    for (let i = 0; i < t.length; i++) {
        let val = t.charCodeAt(i);
        arr[val - 97] -= 1;
    }

    let max = Math.max(...arr);

    return max == 0;
}

//console.log(Optimal(s, t));


/**
 * Time complexity: O(n)
 * space complexity: O(1)
 */

