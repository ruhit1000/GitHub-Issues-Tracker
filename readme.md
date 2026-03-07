1. What is the difference between var, let, and const?

Ans: While var, let, and const all are used to declear variables but they all perform different style. var is the oldest form of declearing variables. In modern javascript (ES6), we use let and const. Difference between them are given bellow:
var: var is function scoped. It is available throughout the function it's decleared in. 
let: this is block scoped. It can be never decleared again if once decleared. But the value inside this can be changed or modified.
const: this is also block scoped. It can be never redecleared and never modified if once decleared. If it inside a function block, it can not be access from outside.


2. What is the spread operator (...)?

Ans: Spread operator is a modern (ES6) syntax that allows an iterable like array or object to be expended into individual elements. It takes the elements of one array and place these into another. It is used for copying or merging arrays/objects. We also can pass values from array or object to any function cells.


3. What is the difference between map(), filter(), and forEach()?

Ans: map() function takes elements form an array and do some tasks that are given for each elements and stores them in a new array.
filter() function also takes elements from an array and searches for the similer conditions for each elements. If something matches, this function stores them in a new array.
forEach() function works same as map() function where it takes elements from an array and do some tasks. But the difference is it do not return anything. 


4. What is an arrow function?

Ans: Arrow function is an update feature of modern ES6. It repleaces traditional function with an arrow (=>) symble. In traditional function, We declear a function by writing function and give it a name. In arrow function, the word function is replaced with that (=>) arrow sign. This modern feature reduces extra line of codes.


5. What are template literals?

Ans: Tamplate literals are also known as tamplate string in modern JavaScript(ES6+). This is defined by backticks(``). This feature allows us to write multiline strings and string interpolation. We can insert variables or expressions directly into a string using the ${expression} syntax.