/** @module Gameboard */

/**
 * GameBoard constructor that initializes and array of characters
 *  that represents a game board for a tic tac toe game.
 *  @member{char[9]} squares - Represents the tic tac toe board.
 *  @member{int} filledSquares - Stores how many squares in the board are filled with either 'X' or 'O'.
 */
function GameBoard() {
    //squaresFilled is initialized in clearBoard() call
    //decleration is kept in comment for readability's sake
    //this.squaresFilled = 0;
    this.squares = new Array(9);
    this.clearBoard();
}

/**
 * Checks if input has a value between 1-9 and therefor valid.
 * @param{int} input - An integer value from 1-9 representing a square in the scoreboard.
 * @return{bool} Returns true if input has a value between 1-9, otherwise false.
 */
GameBoard.prototype.isValidInput = function(input) {
    if(input > 0 && input < 10 && this.squares[input - 1] === " ") {
        return true;
    }
    return false;
}

/**
 * Fills a square in the game board with either 'X' or 'O' depending on the value of sign
 *  and increments squaresFilled if the value of input is between 1-9.
 * @param{input} - An integer value from 1-9 representing a square in the scoreboard.
 * @param{sign} - A char which has the value 'X' or 'O' depending on which players' turn it is.
 * @return{bool} - Returns true if the square was successfully filled, otherwise false.
 */
GameBoard.prototype.fillSquare = function(input, sign) {
    if(this.isValidInput(input)) {
        this.squares[input - 1] = sign;
        this.squaresFilled++;
        return true;
    }
    return false;
}

/**
 * Checks if the game board is full. If filledSquares is equal to 9 then the board is full.
 * @return{bool} Return true if filledSquares is equals to 9, otherwise false.
 */
GameBoard.prototype.isFull = function() {
    if(this.squaresFilled === 9) {
        return true;
    }
    return false;
}

/**
 * Clears the game board by setting filledSquares to 0 and every index in squares to " ".
 */
GameBoard.prototype.clearBoard = function() {
    this.squaresFilled = 0;
    for(var i = 0; i < this.squares.length; i++) {
        this.squares[i] = " ";
    }
}

/**
 * Checks if the current player has won the game.
 * @param{char} sign - Represents the current player either 'X' or 'O'.
 * @return{bool} Returns true is there is a winner, otherwise false.
 */
GameBoard.prototype.isWinner = function(sign) {
    if(this.isWinnerHorizontal(sign) || this.isWinnerVertical(sign) || this.isWinnerDiagonal(sign)) {
        return true;
    }
    return false;
}

/**
 * Checks the game board horizontally for any three horizontal squares that
 * have the same value as sign.
 * @param{char} sign - Represents the current player either 'X' or 'O'.
 * @return{bool} Returns true if three horizontal squares have the same value as sign, otherwise false.
 */
GameBoard.prototype.isWinnerHorizontal = function(sign) {
    if(this.isThreeFilled(sign, 0, 1, 2) || this.isThreeFilled(sign, 3, 4, 5) || this.isThreeFilled(sign, 6, 7, 8)) {
        return true;
    }
    return false;
}

/**
 * Checks the game board vertically for any three vertical squares that 
 * have the same value as sign.
 * @param{char} sign - Represents the current player either 'X' or 'O'.
 * @return{bool} Returns true if three vertically squares have the same value as sign, otherwise false.
 */
GameBoard.prototype.isWinnerVertical = function(sign) {
    if(this.isThreeFilled(sign, 0, 3, 6) || this.isThreeFilled(sign, 1, 4, 7) || this.isThreeFilled(sign, 2, 5, 8)) {
        return true;
    }
    return false;
}

/**
 * Checks the game board diagonally for any three diagonal squares that 
 * have the same value as sign.
 * @param{char} sign - Represents the current player either 'X' or 'O'.
 * @return{bool} Returns true if three diagonal squares have the same value as sign, otherwise false.
 */
GameBoard.prototype.isWinnerDiagonal = function(sign) {
    if(this.isThreeFilled(sign, 0, 4, 8) || this.isThreeFilled(sign, 2, 4, 6)) {
        return true;
    }
    return false;
}

/**
 * Checks if three squares are filled with the same sign value.
 * @param{char} sign - Represents the current player either 'X' or 'O'.
 * @param{int} index1 - An index in the square array.
 * @param{int} index1 - An index in the square array.
 * @param{int} index1 - An index in the square array.
 * @return{bool} Returns true if there are three squares filled with the sign value, otherwise false.
 */
GameBoard.prototype.isThreeFilled = function(sign, index1, index2, index3) {
    if(this.squares[index1] === sign && this.squares[index2] === sign && this.squares[index3] === sign) {
        return true;
    }
    return false;
}

module.exports = GameBoard;
