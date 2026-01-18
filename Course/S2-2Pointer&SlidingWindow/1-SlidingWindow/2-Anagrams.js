//https://pythontutor.com/render.html#mode=display
/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */
let s = "abbecfe", p = "ab";

function Anagram(s, p) {
    let result = [];
    let map = new Map();
    for (let ch of p) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }
    let start = 0, matched = 0;
    for (let end = 0; end < s.length; end++) {
        let curr = s[end];
        if (map.has(curr)) {
            map.set(curr, map.get(curr) - 1);
            if (map.get(curr) == 0) {
                matched++;
            }
        }
        if (matched == map.size) {
            result.push(start);
        }
        if (end >= p.length - 1) {
            let startEl = s[start++];
            if (map.has(startEl)) {
                if (map.get(startEl) == 0) {
                    matched--;
                }
                map.set(startEl, map.get(startEl) + 1);
            }
        }
    }
    return result;
}

console.log(Anagram(s, p));
