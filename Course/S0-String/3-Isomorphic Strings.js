/**Isomorphic Strings 
 * 
 * Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:

Input: s = "paper", t = "title"

Output: true
*/

/** Key points
 * - if the length of the string is not equal, then they are not isomorphic
 */

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        let b = t[i];


        if ((mapS[a] && mapS[a] !== b) || (mapT[b] && mapT[b] !== a)) {
            return false;
        }

        mapS[a] = b;
        mapT[b] = a;
    }

    return true;

};

/**
- Time complexity: O(n)
- Space complexity: O(n)
 */


function Optimized(s, t) {
    for (i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }
    return true;
}


let s = "f11", t = "b23";
//console.log(Optimized(s, t));


/**
- Time complexity: O(n*n)
- Space complexity: O(1)
 */


// more Optimized

var isIsomorphic1 = function (s, t) {
    let mapST = new Array(256).fill(-1);
    let mapTS = new Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        let a = s.charCodeAt(i);
        let b = t.charCodeAt(i);

        if (mapST[a] !== mapTS[b]) {
            return false;
        }

        mapST[a] = i;
        mapTS[b] = i;
    }

    return true;
};

console.log(isIsomorphic1(s, t));


/**
Time complexity: O(n)
Space complexity: O(1)
 */