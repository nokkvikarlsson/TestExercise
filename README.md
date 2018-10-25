<a name="module_tictactoe"></a>

## tictactoe

* [tictactoe](#module_tictactoe)
    * [~Tictactoe()](#module_tictactoe..Tictactoe)
        * [.takeInput()](#module_tictactoe..Tictactoe+takeInput) ⇒ <code>boolean</code>

<a name="module_tictactoe..Tictactoe"></a>

### tictactoe~Tictactoe()
Tictactoe constructor that intializes and empty tictactoe board.

**Kind**: inner method of [<code>tictactoe</code>](#module_tictactoe)  
<a name="module_tictactoe..Tictactoe+takeInput"></a>

#### tictactoe.takeInput() ⇒ <code>boolean</code>
Takes in an integer as a parameter and filles a square in the gameboard with the value of sign beetween 1-9 
corresponding to the value of input and then swaps the value of sign to 'X' or 'O' depending on the current value of sign.

**Kind**: instance method of [<code>Tictactoe</code>](#module_tictactoe..Tictactoe)  
**Returns**: <code>boolean</code> - Returns whether or not input was a success  
**Param{integer}**: input -  
