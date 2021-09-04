//Author : Suresh Krishna 
//Date : 04 - 09 - 2021


INSTRUCTIONS:

Slide on/off :
Slide OFF -
When the slide is  “OFF” , the user can manually pick cells and can assign them alive or dead states in a total of 100 chances.
Slide ON-When the slide is “ON”, the program randomly assigns alive or dead states to the cells.

Start and Stop options (placed in left down corner):
Start- The program gets executed and cells get assigned to live and dead states.
Stop-The program execution stops.

Click on the cell:

When user clicks on the cell, they can name the cell 
Input :
When a user enters the name of a particular cell, its state is displayed.

Board:

Board consists of a total of 500 cells.Each cell has two states-dead or alive.
Alive has a boolean value 1 and is in black color.
Dead has boolean value 0 and is in white color.


RUNNING THE PROGRAM:

When user runs the program, the conditions below are checked:
1. Any live cell with fewer than two live neighbors dies, as if by loneliness. 
2. Any live cell with more than three live neighbors dies, as if by overcrowding. 
3. Any live cell with two or three live neighbors lives, unchanged, to the next generation. 
4. Any dead cell with exactly three live neighbors comes to life. 

Each cell checks the above mentioned conditions and changes its state to alive or dead.



