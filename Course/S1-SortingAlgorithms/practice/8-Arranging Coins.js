/**
 * Arranging Coins
 * 
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:
 
[🟡] --> first row is complete
[🟡][🟡] --> second row is complet
[🟡][🟡][  ] --> third row is incomplete , so return the last completed row 2.


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:

[🟡] --> first row is complete
[🟡][🟡] --> second row is complet
[🟡][🟡][🟡] --> third row is complet
[🟡][🟡][   ][   ] --> fourth row is incomplete , so return the last completed row 3.

Input: n = 7
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 

Constraints:

1 <= n <= 231 - 1
 */


/**
 * @param {number} n
 * @return {number}
 */


// ==== brute froce Opproach ===== 

var arrangeCoins = function (n) {//
    let count = n, ans = 0;
    for (let i = 1; i <= n ; i++) {
        for (let j = 1; j < i + 1; j++) {
            // console.log('count:',count);
            // console.log('ans:',ans);
            if (count == 0 && ans == n) {
                return i - 1;
            }
            else {
                count--;
                ans++;
            }
        }
    }
    return 1;
};

console.log(arrangeCoins(15));


/**
 - Time complexity: O(n^2)
 - Space complexity: O(1)
*/

// ==== Optimize way =====

var arrangeCoinsOptimize =function (n){
    let l=1,r=n;

    while(l<=r){
        let mid = l + Math.floor((r-l)/2);
        let coin = (mid *(mid+1))/2;

        if(coin == n){
            return mid;
        }
        else if(coin > n){
            r = mid-1;
        }
        else {
            l = mid+1;
        }
    }
    return r;
}

//console.log(arrangeCoinsOptimize(15));

/**
 - Time complexity: O(n log n)
 - Space complexity: O(1)
*/
