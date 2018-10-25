<a name="module_Tictactoe"></a>

## Tictactoe

* [Tictactoe](#module_Tictactoe)
    * [~Tictactoe()](#module_Tictactoe..Tictactoe)
        * [.takeInput()](#module_Tictactoe..Tictactoe+takeInput)
        * [.showBoard()](#module_Tictactoe..Tictactoe+showBoard)

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
