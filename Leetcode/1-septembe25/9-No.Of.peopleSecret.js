/**
 On day 1, one person discovers a secret.

You are given an integer delay, which means that each person will share the secret with a new person every day, starting from delay days after discovering the secret. You are also given an integer forget, which means that each person will forget the secret forget days after discovering it. A person cannot share the secret on the same day they forgot it, or on any day afterwards.

Given an integer n, return the number of people who know the secret at the end of day n. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 6, delay = 2, forget = 4
Output: 5
Explanation:
Day 1: Suppose the first person is named A. (1 person)
Day 2: A is the only person who knows the secret. (1 person)
Day 3: A shares the secret with a new person, B. (2 people)
Day 4: A shares the secret with a new person, C. (3 people)
Day 5: A forgets the secret, and B shares the secret with a new person, D. (3 people)
Day 6: B shares the secret with E, and C shares the secret with F. (5 people)
Example 2:

Input: n = 4, delay = 1, forget = 3
Output: 6
Explanation:
Day 1: The first person is named A. (1 person)
Day 2: A shares the secret with B. (2 people)
Day 3: A and B share the secret with 2 new people, C and D. (4 people)
Day 4: A forgets the secret. B, C, and D share the secret with 3 new people. (6 people)
 */


const MOD = 1e9 + 7;

function peopleAwareOfSecret(n, delay, forget) {
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1; // On day 1, one person knows the secret

    let shareable = 0; // Number of people who can share the secret on day i

    for (let day = 2; day <= n; day++) {
        // People who become sharers today: those who started delay days ago
        shareable = (shareable + dp[day - delay] || 0) % MOD;
        // People who forget today: remove those who learned the secret forget days ago
        shareable = (shareable - (dp[day - forget] || 0) + MOD) % MOD;
        // New people who learn the secret today
        dp[day] = shareable;
    }

    // Sum people who still know the secret on day n
    let result = 0;
    for (let day = n - forget + 1; day <= n; day++) {
        result = (result + dp[day]) % MOD;
    }
    return result;
}

// Example usage:
console.log(peopleAwareOfSecret(4, 1, 3)); // Output according to problem logic
