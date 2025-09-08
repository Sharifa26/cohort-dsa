/**
 * Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
The '.' character indicates empty cells.
 */

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], 
            ["6", ".", ".", "1", "9", "5", ".", ".", "."], 
            [".", "9", "8", ".", ".", ".", ".", "6", "."], 
            ["8", ".", ".", ".", "6", ".", ".", ".", "3"], 
            ["4", ".", ".", "8", ".", "3", ".", ".", "1"], 
            ["7", ".", ".", ".", "2", ".", ".", ".", "6"], 
            [".", "6", ".", ".", ".", ".", "2", "8", "."], 
            [".", ".", ".", "4", "1", "9", ".", ".", "5"], 
            [".", ".", ".", ".", "8", ".", ".", "7", "9"]]


function solve(row,col,board){
    if(row == 8 && col == 9){
        return true;
    }
    if(col == 9){
        row +=1;
        col=0;
    }
    if(board[row][col] != '.'){
        return solve(row,col+1,board);
    }
    for(let number=1;number<=9;number++ ){
        const ch = number.toString();
        if(isvalid(row,col,board,ch)){
            board[row][col] = ch;
            if(solve(row,col+1,board)){
                return true;
            }
            else{
                board[row][col] = '.';
            }
        }
    }
return false;
}

function isvalid(row,col,board,ch){
    if(row < 0 || col <0 || row >=9 || col >=9 ) return false;
    for(let i=0;i<=8;i++){
        if(board[i][col] == ch || board[row][i] == ch) return false;
    }
    let StartRow = row - (row % 3);
    let StartCol = col - (col %3);
    for(let r=0;r<3;r++){
        for(let c=0;c<3;c++){
            if(board[r+StartRow][c+StartCol] == ch){
                return false;
            }
        }
    }
    return true;
}

function sudoku(board){
    solve(0,0,board);
    return board;
}

console.log(sudoku(board));
