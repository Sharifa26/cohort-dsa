/**
 966. Vowel Spellchecker

 Given a wordlist, we want to implement a spellchecker that converts a query word into a correct word.

For a given query word, the spell checker handles two categories of spelling mistakes:

Capitalization: If the query matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the case in the wordlist.
Example: wordlist = ["yellow"], query = "YellOw": correct = "yellow"
Example: wordlist = ["Yellow"], query = "yellow": correct = "Yellow"
Example: wordlist = ["yellow"], query = "yellow": correct = "yellow"
Vowel Errors: If after replacing the vowels ('a', 'e', 'i', 'o', 'u') of the query word with any vowel individually, it matches a word in the wordlist (case-insensitive), then the query word is returned with the same case as the match in the wordlist.
Example: wordlist = ["YellOw"], query = "yollow": correct = "YellOw"
Example: wordlist = ["YellOw"], query = "yeellow": correct = "" (no match)
Example: wordlist = ["YellOw"], query = "yllw": correct = "" (no match)
In addition, the spell checker operates under the following precedence rules:

When the query exactly matches a word in the wordlist (case-sensitive), you should return the same word back.
When the query matches a word up to capitlization, you should return the first such match in the wordlist.
When the query matches a word up to vowel errors, you should return the first such match in the wordlist.
If the query has no matches in the wordlist, you should return the empty string.
Given some queries, return a list of words answer, where answer[i] is the correct word for query = queries[i].

 

Example 1:

Input: wordlist = ["KiTe","kite","hare","Hare"], queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
Output: ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
Example 2:

Input: wordlist = ["yellow"], queries = ["YellOw"]
Output: ["yellow"]
*/

var spellchecker = function (wordlist, queries) {
    // let output = [];
    // for (word of queries) {
    //     if (wordlist.includes(word)) {
    //         output.push(word);
    //     } else {
    //         let lower = word.toLowerCase();
    //         let found = wordlist.find(w => w.toLowerCase() === lower);
    //         if (found) {
    //             output.push(found);
    //         } else {
    //             output.push("");
    //         }
    //     }
    // }
    // return output;
    // Helper function to normalize vowels
    const normalizeVowels = (word) => {
        return word.replace(/[aeiou]/gi, '#');
    };

    // 1. Create three lookup structures for O(1) average time lookups
    const exactSet = new Set(wordlist);
    const caseMap = {}; // Key: lowercase word, Value: original word
    const vowelMap = {}; // Key: vowel-normalized word, Value: original word

    // 2. Populate the lookups
    for (const word of wordlist) {
        const lower = word.toLowerCase();
        const normalized = normalizeVowels(lower);

        if (!caseMap[lower]) {
            caseMap[lower] = word;
        }

        if (!vowelMap[normalized]) {
            vowelMap[normalized] = word;
        }
    }

    // 3. Process each query using the lookup structures
    const result = [];
    for (const query of queries) {
        if (exactSet.has(query)) { // Rule 1: Exact match
            result.push(query);
            continue;
        }

        const lowerQuery = query.toLowerCase();
        if (caseMap[lowerQuery]) { // Rule 2: Case-insensitive match
            result.push(caseMap[lowerQuery]);
            continue;
        }

        const normalizedQuery = normalizeVowels(lowerQuery);
        if (vowelMap[normalizedQuery]) { // Rule 3: Vowel-error match
            result.push(vowelMap[normalizedQuery]);
            continue;
        }

        result.push(""); // No match
    }

    return result;
};


console.log(spellchecker(["KiTe", "kite", "hare", "Hare"],["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"]));


/**
 L1 = the total number of characters in all words in wordlist.
 L2 = the total number of characters in all words in queries.


 Time Complexity: O(L1 + L2)  = (m + n)
 Space Complexity: O(L1)
*/
