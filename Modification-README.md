## Modification Summary

First two commits are algorithm upgrades.

### 1. Winner check algorithm (commit: 216cf9f3c472a18a7c7459c5af4bbb4f4be04d78)
Problem:
To check winner set, loop all winner sets and check each of the set now.
But because of we always check the winner when new cell is filled, it is enough to check the pairs that last cell included.
In total, unnecessary loops.

Solution:
Using hashed database to find the last cell included pairs directly.
So, instead of using a winner sets array variable (similar to normal database), used winner mapping object variable (similar to hashed database).

Result:
Improved performance of winner checking by reducing the looping count. (From max 8 to max 4)

### 2. Finding best move algorithm (commit: 652ea9e845d03e536371a50dd76b51ead3980fe4)
Problem:
When playing against a computer, currently the computer is picking a cell randomly.
So the difficulty is so low and even a baby win the game who can click the cell. :)
Also, we can use the existing hashed database to find the best move.
And this can be used as a `hint` feature if needed.

Solution:
Check all empty cells if it has possible winner case.
Pick one that has maximum number of cases.

Result:
Improved difficulty when playing against a computer.

### 3. Replacing global variables to local variables (commit: No)
Problem:
Using global variables is not a recommended way even if it is a easy way to sync variables all over the project.
For example, anybody can access/update global variables using browser developer tools.

Solution:
1. Use global state management ways.
Context or redux can be the solutions but they are not available with current project's react version. (react 15.2.0)
But we can make one if needed.

2. Use props to sync variables between components. (Most basic solution but recommended)

### 4. Removing unnecessary code parts.
There are some unnecessary code parts like 
1. conditions (calculation speed)
2. variable declaration (memory size)
3. component declarations inside of render method. (Should be independent, i.e: views/pages/Contact.js)
4. Empty constructors and super calls inside constructor. (i.e: views/ttt/SetGameType.js)
Calling `super(props)` is only needed when we need to use `this.props` inside of the constructor
5. Duplicated function declarations that can me merged to one. (i.e: views/ttt/SetGameType.js)
