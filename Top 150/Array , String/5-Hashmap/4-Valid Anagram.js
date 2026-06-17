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
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */


var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
        tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i]) != tMap.get(s[i])) {
            return false;
        }
    }
    return true

};

/**
 * TC - O(n+m)
 * SC - O(n+m)
 */


//console.log(isAnagram('nagaram', 'anagram'));



var betterSolution = function (s, t) {
    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of t) {
        if (!map.has(ch)) return false;

        map.set(ch, map.get(ch) - 1);

        if (map.get(ch) == 0) {
            map.delete(ch);
        }
    }

    return map.size == 0;
}


//console.log(betterSolution('nagaram', 'angram'));


/**
 * TC - O(n+m)
 * SC - O(n)
 */


var isAnagram1 = function (s, t) {
    if (s.length !== t.length) return false;
    const charArr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        charArr[s.charCodeAt(i) - 97]++;
        charArr[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) {
        if (charArr[i] !== 0) return false;
    }
    return true;

};


console.log(isAnagram1('nagaram', 'angram'));


/**
 * TC - O(n)
 * SC - O(1)
 */