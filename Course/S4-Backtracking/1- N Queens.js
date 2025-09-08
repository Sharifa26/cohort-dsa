/**
 The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]
 */

function solvenQueens(n) {
    let result = [];
    let board = [];
    for (let i = 0; i < n; i++) {
        board.push(".".repeat(n));
    }
    //console.log(board);
    let cols = new Set();
    let diag1 = new Set();
    let diag2 = new Set();

    function backTrack(row) {
        if (row == n) {
            result.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if(cols.has(col) || diag1.has(row+col) || diag2.has(row-col)){
                continue;
            }
            let rowArr = board[row].split("");
            rowArr[col] = "Q";
            board[row] = rowArr.join("");
            cols.add(col);
            diag1.add(row+col);
            diag2.add(row-col);

            backTrack(row+1);

            rowArr[col] = ".";
            board[row] = rowArr.join("");
            cols.delete(col);
            diag1.delete(row+col);
            diag2.delete(row-col);
        }
    }

    backTrack(0);
    return result;
}

console.log(solvenQueens(6));
