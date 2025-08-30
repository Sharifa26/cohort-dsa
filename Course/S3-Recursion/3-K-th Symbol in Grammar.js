/***
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

 

Example 1:

Input: n = 1, k = 1
Output: 0
Explanation: row 1: 0
Example 2:

Input: n = 2, k = 1
Output: 0
Explanation: 
row 1: 0
row 2: 01
Example 3:

Input: n = 2, k = 2
Output: 1
Explanation: 
row 1: 0
row 2: 01
 */

/**

| Row (n) |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 |
|---------|----|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|
|   1     | 0  |   |   |   |   |   |   |   |   |    |    |    |    |    |    |    |
|   2     | 0  | 1 |   |   |   |   |   |   |   |    |    |    |    |    |    |    |
|   3     | 0  | 1 | 1 | 0 |   |   |   |   |   |    |    |    |    |    |    |    |
|   4     | 0  | 1 | 1 | 0 | 1 | 0 | 0 | 1 |   |    |    |    |    |    |    |    |
|   5     | 0  | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 1 | 0  | 0  | 1  | 0  | 1  | 1  | 0  |

// (Row 5 extends length 16; column numbers shown at top)

 */



function kthGrammar(n,k){
    if( k == 1) return 0;
    let curr = Math.pow(2,n-1);
    let per = curr/2;
    if(per < k){
        return 1-kthGrammar(n-1,k-per);
    }
    else{
        return kthGrammar(n-1,k);
    }
}

console.log(kthGrammar(4,5));

/**
TC = O(n)
SC = O(n)
**/