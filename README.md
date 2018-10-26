## Classes

<dl>
<dt><a href="#GameBoard">GameBoard</a></dt>
<dd></dd>
<dt><a href="#ScoreBoard">ScoreBoard</a></dt>
<dd></dd>
<dt><a href="#Tictactoe">Tictactoe</a></dt>
<dd></dd>
</dl>

<a name="GameBoard"></a>

## GameBoard
**Kind**: global class  
**Member{char[9]}**: squares - Represents the tic tac toe board.  
**Member{integer}**: filledSquares - Stores how many squares in the board are filled with either 'X' or 'O'.  

* [GameBoard](#GameBoard)
    * [new GameBoard()](#new_GameBoard_new)
    * [.isValidInput()](#GameBoard+isValidInput)
    * [.fillSquare()](#GameBoard+fillSquare)
    * [.isFull()](#GameBoard+isFull)
    * [.clearBoard()](#GameBoard+clearBoard)
    * [.isWinner()](#GameBoard+isWinner)
    * [.isWinnerHorizontal()](#GameBoard+isWinnerHorizontal)
    * [.isWinnerVertical()](#GameBoard+isWinnerVertical)
    * [.isWinnerDiagonal()](#GameBoard+isWinnerDiagonal)
    * [.isThreeFilled()](#GameBoard+isThreeFilled)

<a name="new_GameBoard_new"></a>

### new GameBoard()
GameBoard constructor that initializes and array of characters
that represents a game board for a tic tac toe game.

<a name="GameBoard+isValidInput"></a>

### gameBoard.isValidInput()
Checks if input has a value between 1-9 and therefor valid.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{int}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{bool}**: Returns true if input has a value between 1-9, otherwise false.  
<a name="GameBoard+fillSquare"></a>

### gameBoard.fillSquare()
Fills a square in the game board with either 'X' or 'O' depending on the value of sign
 and increments squaresFilled if the value of input is between 1-9.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{input}**: - An integer value from 1-9 representing a square in the scoreboard.  
**Param{sign}**: - A char which has the value 'X' or 'O' depending on which players' turn it is.  
**Return{bool}**: - Returns true if the square was successfully filled, otherwise false.  
<a name="GameBoard+isFull"></a>

### gameBoard.isFull()
Checks if the game board is full. If filledSquares is equal to 9 then the board is full.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Return{bool}**: Return true if filledSquares is equals to 9, otherwise false.  
<a name="GameBoard+clearBoard"></a>

### gameBoard.clearBoard()
Clears the game board by setting filledSquares to 0 and every index in squares to " ".

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
<a name="GameBoard+isWinner"></a>

### gameBoard.isWinner()
Checks if the current player has won the game.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true is there is a winner, otherwise false.  
<a name="GameBoard+isWinnerHorizontal"></a>

### gameBoard.isWinnerHorizontal()
Checks the game board horizontally for any three horizontal squares that
have the same value as sign.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true if three horizontal squares have the same value as sign, otherwise false.  
<a name="GameBoard+isWinnerVertical"></a>

### gameBoard.isWinnerVertical()
Checks the game board vertically for any three vertical squares that 
have the same value as sign.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true if three vertically squares have the same value as sign, otherwise false.  
<a name="GameBoard+isWinnerDiagonal"></a>

### gameBoard.isWinnerDiagonal()
Checks the game board diagonally for any three diagonal squares that 
have the same value as sign.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true if three diagonal squares have the same value as sign, otherwise false.  
<a name="GameBoard+isThreeFilled"></a>

### gameBoard.isThreeFilled()
Checks if three squares are filled with the same sign value.

**Kind**: instance method of [<code>GameBoard</code>](#GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Param{int}**: index1 - An index in the square array.  
**Param{int}**: index1 - An index in the square array.  
**Param{int}**: index1 - An index in the square array.  
**Return{bool}**: Returns true if there are three squares filled with the sign value, otherwise false.  
<a name="ScoreBoard"></a>

## ScoreBoard
**Kind**: global class  

* [ScoreBoard](#ScoreBoard)
    * [new ScoreBoard()](#new_ScoreBoard_new)
    * [.raiseWins()](#ScoreBoard+raiseWins)
    * [.clearScores()](#ScoreBoard+clearScores)

<a name="new_ScoreBoard_new"></a>

### new ScoreBoard()
ScoreBoard constructor the initializes xWins and oWins as 0.

<a name="ScoreBoard+raiseWins"></a>

### scoreBoard.raiseWins()
Increments either xWins or oWins depending on whether the value of sign is "X" or "O".

**Kind**: instance method of [<code>ScoreBoard</code>](#ScoreBoard)  
<a name="ScoreBoard+clearScores"></a>

### scoreBoard.clearScores()
Sets xWins and oWins to 0.

**Kind**: instance method of [<code>ScoreBoard</code>](#ScoreBoard)  
<a name="Tictactoe"></a>

## Tictactoe
**Kind**: global class  
**Member{gameboard}**: gameBoard - Represents the tic tac toe gameboard.  
**Member{scoreboard}**: scoreBoard - Represents the tic tac toe scoreboard.  
**Member{char}**: sign - Represents the current player either 'X' or 'O'.  

* [Tictactoe](#Tictactoe)
    * [new Tictactoe()](#new_Tictactoe_new)
    * [.takeInput()](#Tictactoe+takeInput)
    * [.showBoard()](#Tictactoe+showBoard)
    * [.startNewGame()](#Tictactoe+startNewGame)
    * [.play()](#Tictactoe+play)

<a name="new_Tictactoe_new"></a>

### new Tictactoe()
Tictactoe constructor that intializes the starting player a 'X' and initalizes an empty game board and score board.

<a name="Tictactoe+takeInput"></a>

### tictactoe.takeInput()
Takes in an integer as a parameter and filles a square in the gameboard with the value of sign beetween 1-9 
corresponding to the value of input and then swaps the value of sign to 'X' or 'O' depending on the current value of sign.

**Kind**: instance method of [<code>Tictactoe</code>](#Tictactoe)  
**Param{int}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{bool}**: Returns whether or not input was a success.  
<a name="Tictactoe+showBoard"></a>

### tictactoe.showBoard()
Prints out the tic tac toe board to the console.

**Kind**: instance method of [<code>Tictactoe</code>](#Tictactoe)  
<a name="Tictactoe+startNewGame"></a>

### tictactoe.startNewGame()
Sets the current player as 'X' and clears the game board and the score board

**Kind**: instance method of [<code>Tictactoe</code>](#Tictactoe)  
<a name="Tictactoe+play"></a>

### tictactoe.play()
Starts a tic tac toe game, and calls itself recursively until either player wins or the game ends in a draw.
If either player wins raise either xWins og oWins in the score board depending if 'X' or 'O' won.

**Kind**: instance method of [<code>Tictactoe</code>](#Tictactoe)  
