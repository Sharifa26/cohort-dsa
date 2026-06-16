/**Group Anagrams
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */


var groupAnagrams = function (strs) {

    let resultMap = new Map();

    for (let str of strs) {

        let tempMap = new Map();

        for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            tempMap.set(String.fromCharCode(i));
        }

        for (let ch of str) {
            tempMap.set(ch, (tempMap.get(ch) || 0) + 1);
        }

        let key = Array.from(tempMap.values()).join('#');

        if (!resultMap.has(key)) {
            resultMap.set(key, []);
        }

        console.log(key);


        resultMap.get(key).push(str);
    }


    return Array.from(resultMap.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

//console.log(groupAnagrams(strs));



var better = function (strs){

    let map = new Map();

    for(let ch of strs){

        let key = ch.split('').sort().join('');

        if(!map.has(key)){
            map.set(key,[]);
        }

        map.get(key).push(ch);
    }

    return Array.from(map.values());
}

// console.log(better(strs));


var best = function(strs){
    let map = new Map();

    for(let str of strs){
        let arr = new Array(26).fill(0);

        for(let ch of str){
            arr[ch.charCodeAt(0) - 97]++;
        }

        let key = arr.join('#');

        if(!map.has(key)){
            map.set(key,[]);
        }

        map.get(key).push(str);
    }

    return Array.from(map.values());
}

console.log(best(strs));
