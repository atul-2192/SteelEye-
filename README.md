  Assignment of SteelEye Limited.
  By Atul Kumar Singh.
1) Explain what does the simple List component does?
  
  
  SOLUTION:- 
  
  This code render an unorered list of items as item 1,item 2,item 3 with background color of RED, and has onclick funtion , 
  if it get clicked then , 
  
              background color changes from RED to GREEN.
  This is a step by step explaination:
  
  a) List displays all the values of text that is available ,as an unordered list.

  b) On clicking over any element of list, 
  
       onClickHandler function gets executed and it will trigger handleClick function.
       
       'handleClick' function will then set the value of selectedIndex as the index of list element that was clicked. 
       
       Then backgroundColor style property will get changed and set the background-color as directed (Red/Green). 
       

2) What problems / warnings is there with code?


SOLUTION:-
a)useState hook should be defined with correct syntax.

b)items.text should have some values to display.

c)map function should 'return' something.

d)In propTypes array and shapeOf shoud be replaced with arrayOf and shape respectively.


3) Please fix and optimize the component as much as you can think of considering best practices.


SOLUTION:-
a)All Styles can be put in one CSS file.

b)Content of items can be put inside one file,Data.js

c)In case if we plan to put more components in our application then we can put them in separate files.

                {Refer to code for better explanation}
