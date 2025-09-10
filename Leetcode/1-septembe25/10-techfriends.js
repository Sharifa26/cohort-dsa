/**
 . Minimum Number of People to Teach
On a social network consisting of m users and some friendships between users, two users can communicate with each other if they know a common language.

You are given an integer n, an array languages, and an array friendships where:

There are n languages numbered 1 through n,
languages[i] is the set of languages the i​​​​​​th​​​​ user knows, and
friendships[i] = [u​​​​​​i​​​, v​​​​​​i] denotes a friendship between the users u​​​​​​​​​​​i​​​​​ and vi.
You can choose one language and teach it to some users so that all friends can communicate with each other. Return the minimum number of users you need to teach.

Note that friendships are not transitive, meaning if x is a friend of y and y is a friend of z, this doesn't guarantee that x is a friend of z.
 

Example 1:

Input: n = 2, languages = [[1],[2],[1,2]], friendships = [[1,2],[1,3],[2,3]]
Output: 1
Explanation: You can either teach user 1 the second language or user 2 the first language.
Example 2:

Input: n = 3, languages = [[2],[1,3],[1,2],[3]], friendships = [[1,4],[1,2],[3,4],[2,3]]
Output: 2
Explanation: Teach the third language to users 1 and 3, yielding two users to teach.
 */


var minimumTeachings = function (n, languages, friendships) {
    // Step 1: Convert user language lists into Sets for fast lookup
    const userLangs = languages.map(arr => new Set(arr));

    // Step 2: Find users in "bad friendships"
    const badUsers = new Set();
    for (let [u, v] of friendships) {
        u--; // convert to 0-based index
        v--;
        const langsU = userLangs[u];
        const langsV = userLangs[v];

        // check if they have any common language
        let hasCommon = false;
        for (let lang of langsU) {
            if (langsV.has(lang)) {
                hasCommon = true;
                break;
            }
        }

        // if no common language, add them to badUsers
        if (!hasCommon) {
            badUsers.add(u);
            badUsers.add(v);
        }
    }

    // Step 3: Try each language and count how many users need to learn it
    let minTeach = Infinity;

    for (let L = 1; L <= n; L++) {
        let count = 0;
        for (let user of badUsers) {
            if (!userLangs[user].has(L)) {
                count++;
            }
        }
        minTeach = Math.min(minTeach, count);
    }

    return minTeach;
};

let n = 3, languages = [[2], [1, 3], [1, 2], [3]], friendships = [[1, 4], [1, 2], [3, 4], [2, 3]];
console.log(minimumTeachings(n, languages, friendships));
