## Modules

<dl>
<dt><a href="#module_Tictactoe">Tictactoe</a></dt>
<dd></dd>
<dt><a href="#module_Tictactoe">Tictactoe</a></dt>
<dd></dd>
<dt><a href="#module_Tictactoe">Tictactoe</a></dt>
<dd></dd>
</dl>

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
**Param{integer}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{boolean}**: Returns whether or not input was a success.  
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
**Param{integer}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{boolean}**: Returns whether or not input was a success.  
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
**Param{integer}**: input - An integer value from 1-9 representing a square in the scoreboard.  
**Return{boolean}**: Returns whether or not input was a success.  
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
