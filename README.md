## Modules

<dl>
<dt><a href="#module_Gameboard">Gameboard</a></dt>
<dd></dd>
<dt><a href="#module_Scoreboard">Scoreboard</a></dt>
<dd></dd>
<dt><a href="#module_Tictactoe">Tictactoe</a></dt>
<dd></dd>
</dl>

<a name="module_Gameboard"></a>

## Gameboard

* [Gameboard](#module_Gameboard)
    * [~GameBoard()](#module_Gameboard..GameBoard)
        * [.isValidInput()](#module_Gameboard..GameBoard+isValidInput)
        * [.fillSquare()](#module_Gameboard..GameBoard+fillSquare)
        * [.isFull()](#module_Gameboard..GameBoard+isFull)
        * [.clearBoard()](#module_Gameboard..GameBoard+clearBoard)
        * [.isWinner()](#module_Gameboard..GameBoard+isWinner)
        * [.isWinnerHorizontal()](#module_Gameboard..GameBoard+isWinnerHorizontal)
        * [.isWinnerVertical()](#module_Gameboard..GameBoard+isWinnerVertical)
        * [.isWinnerDiagonal()](#module_Gameboard..GameBoard+isWinnerDiagonal)
        * [.isThreeFilled()](#module_Gameboard..GameBoard+isThreeFilled)

<a name="module_Gameboard..GameBoard"></a>

### Gameboard~GameBoard()
GameBoard constructor that initializes and array of characters
 that represents a game board for a tic tac toe game.

**Kind**: inner method of [<code>Gameboard</code>](#module_Gameboard)  
**Member{char[9]}**: squares - Represents the tic tac toe board.  
**Member{int}**: filledSquares - Stores how many squares in the board are filled with either 'X' or 'O'.  

* [~GameBoard()](#module_Gameboard..GameBoard)
    * [.isValidInput()](#module_Gameboard..GameBoard+isValidInput)
    * [.fillSquare()](#module_Gameboard..GameBoard+fillSquare)
    * [.isFull()](#module_Gameboard..GameBoard+isFull)
    * [.clearBoard()](#module_Gameboard..GameBoard+clearBoard)
    * [.isWinner()](#module_Gameboard..GameBoard+isWinner)
    * [.isWinnerHorizontal()](#module_Gameboard..GameBoard+isWinnerHorizontal)
    * [.isWinnerVertical()](#module_Gameboard..GameBoard+isWinnerVertical)
    * [.isWinnerDiagonal()](#module_Gameboard..GameBoard+isWinnerDiagonal)
    * [.isThreeFilled()](#module_Gameboard..GameBoard+isThreeFilled)

<a name="module_Gameboard..GameBoard+isValidInput"></a>

#### gameBoard.isValidInput()
Checks if input has a value between 1-9 and therefor valid.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{int}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{bool}**: Returns true if input has a value between 1-9, otherwise false.  
<a name="module_Gameboard..GameBoard+fillSquare"></a>

#### gameBoard.fillSquare()
Fills a square in the game board with either 'X' or 'O' depending on the value of sign
 and increments squaresFilled if the value of input is between 1-9.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{input}**: - An integer value from 1-9 representing a square in the scoreboard.  
**Param{sign}**: - A char which has the value 'X' or 'O' depending on which players' turn it is.  
**Return{bool}**: - Returns true if the square was successfully filled, otherwise false.  
<a name="module_Gameboard..GameBoard+isFull"></a>

#### gameBoard.isFull()
Checks if the game board is full. If filledSquares is equal to 9 then the board is full.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Return{bool}**: Return true if filledSquares is equals to 9, otherwise false.  
<a name="module_Gameboard..GameBoard+clearBoard"></a>

#### gameBoard.clearBoard()
Clears the game board by setting filledSquares to 0 and every index in squares to " ".

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
<a name="module_Gameboard..GameBoard+isWinner"></a>

#### gameBoard.isWinner()
Checks if the current player has won the game.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true is there is a winner, otherwise false.  
<a name="module_Gameboard..GameBoard+isWinnerHorizontal"></a>

#### gameBoard.isWinnerHorizontal()
Checks the game board horizontally for any three horizontal squares that
have the same value as sign.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true if three horizontal squares have the same value as sign, otherwise false.  
<a name="module_Gameboard..GameBoard+isWinnerVertical"></a>

#### gameBoard.isWinnerVertical()
Checks the game board vertically for any three vertical squares that 
have the same value as sign.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true if three vertically squares have the same value as sign, otherwise false.  
<a name="module_Gameboard..GameBoard+isWinnerDiagonal"></a>

#### gameBoard.isWinnerDiagonal()
Checks the game board diagonally for any three diagonal squares that 
have the same value as sign.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Return{bool}**: Returns true if three diagonal squares have the same value as sign, otherwise false.  
<a name="module_Gameboard..GameBoard+isThreeFilled"></a>

#### gameBoard.isThreeFilled()
Checks if three squares are filled with the same sign value.

**Kind**: instance method of [<code>GameBoard</code>](#module_Gameboard..GameBoard)  
**Param{char}**: sign - Represents the current player either 'X' or 'O'.  
**Param{int}**: index1 - An index in the square array.  
**Param{int}**: index1 - An index in the square array.  
**Param{int}**: index1 - An index in the square array.  
**Return{bool}**: Returns true if there are three squares filled with the sign value, otherwise false.  
<a name="module_Scoreboard"></a>

## Scoreboard

* [Scoreboard](#module_Scoreboard)
    * [~ScoreBoard()](#module_Scoreboard..ScoreBoard)
        * [.raiseWins()](#module_Scoreboard..ScoreBoard+raiseWins)
        * [.clearScores()](#module_Scoreboard..ScoreBoard+clearScores)

<a name="module_Scoreboard..ScoreBoard"></a>

### Scoreboard~ScoreBoard()
ScoreBoard constructor the initializes xWins and oWins as 0.

**Kind**: inner method of [<code>Scoreboard</code>](#module_Scoreboard)  

* [~ScoreBoard()](#module_Scoreboard..ScoreBoard)
    * [.raiseWins()](#module_Scoreboard..ScoreBoard+raiseWins)
    * [.clearScores()](#module_Scoreboard..ScoreBoard+clearScores)

<a name="module_Scoreboard..ScoreBoard+raiseWins"></a>

#### scoreBoard.raiseWins()
Increments either xWins or oWins depending on whether the value of sign is "X" or "O".

**Kind**: instance method of [<code>ScoreBoard</code>](#module_Scoreboard..ScoreBoard)  
<a name="module_Scoreboard..ScoreBoard+clearScores"></a>

#### scoreBoard.clearScores()
Sets xWins and oWins to 0.

**Kind**: instance method of [<code>ScoreBoard</code>](#module_Scoreboard..ScoreBoard)  
<a name="module_Tictactoe"></a>

## Tictactoe

* [Tictactoe](#module_Tictactoe)
    * [~Tictactoe()](#module_Tictactoe..Tictactoe)
        * [.takeInput()](#module_Tictactoe..Tictactoe+takeInput)
        * [.showBoard()](#module_Tictactoe..Tictactoe+showBoard)
        * [.startNewGame()](#module_Tictactoe..Tictactoe+startNewGame)
        * [.play()](#module_Tictactoe..Tictactoe+play)

<a name="module_Tictactoe..Tictactoe"></a>

### Tictactoe~Tictactoe()
Tictactoe constructor that intializes the starting player a 'X' and initalizes an empty game board and score board.

**Kind**: inner method of [<code>Tictactoe</code>](#module_Tictactoe)  
**Member{gameboard}**: gameBoard - Represents the tic tac toe gameboard.  
**Member{scoreboard}**: scoreBoard - Represents the tic tac toe scoreboard.  
**Member{char}**: sign - Represents the current player either 'X' or 'O'.  

* [~Tictactoe()](#module_Tictactoe..Tictactoe)
    * [.takeInput()](#module_Tictactoe..Tictactoe+takeInput)
    * [.showBoard()](#module_Tictactoe..Tictactoe+showBoard)
    * [.startNewGame()](#module_Tictactoe..Tictactoe+startNewGame)
    * [.play()](#module_Tictactoe..Tictactoe+play)

<a name="module_Tictactoe..Tictactoe+takeInput"></a>

#### tictactoe.takeInput()
Takes in an integer as a parameter and filles a square in the gameboard with the value of sign beetween 1-9 
corresponding to the value of input and then swaps the value of sign to 'X' or 'O' depending on the current value of sign.

**Kind**: instance method of [<code>Tictactoe</code>](#module_Tictactoe..Tictactoe)  
**Param{int}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{bool}**: Returns whether or not input was a success.  
<a name="module_Tictactoe..Tictactoe+showBoard"></a>

#### tictactoe.showBoard()
Prints out the tic tac toe board to the console.

**Kind**: instance method of [<code>Tictactoe</code>](#module_Tictactoe..Tictactoe)  
<a name="module_Tictactoe..Tictactoe+startNewGame"></a>

#### tictactoe.startNewGame()
Sets the current player as 'X' and clears the game board and the score board

**Kind**: instance method of [<code>Tictactoe</code>](#module_Tictactoe..Tictactoe)  
<a name="module_Tictactoe..Tictactoe+play"></a>

#### tictactoe.play()
Starts a tic tac toe game, and calls itself recursively until either player wins or the game ends in a draw.
If either player wins raise either xWins og oWins in the score board depending if 'X' or 'O' won.

**Kind**: instance method of [<code>Tictactoe</code>](#module_Tictactoe..Tictactoe)  
