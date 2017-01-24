/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following 
triangle:

#
##
###
####
#####
######
#######
*/

var myString = '';
for(var x = 1; x < 8; x++){
  myString = myString + '#';
  console.log(myString + '\n');
}

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, 
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for 
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" 
for numbers divisible by only one of those).
*/

var x = 1;
var myString = '';
while(x < 101){
  if ((x % 3 == 0) && (x % 5 == 0))
  	console.log("FizzBuzz");
  else if (x % 3 == 0)
    console.log("Fizz");
  else if (x % 5 == 0)
    console.log("Buzz");
  else
    console.log(x);

  x++;
}



/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. At each position of the grid there is either a space 
or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and 
hange the program so that it works for any size, outputting a grid of the given width 
and height.
*/

var size = 8;
var myString = '';
for (var x = 1; x < size + 1; x++){
  if(x % 2 == 0){
    myString = '#';
  	for(var z = 1; z < size + 1; z++){
      if(z != 1){
        if(z % 2 == 0)
          myString = myString + ' ';
        else
          myString = myString + '#';
      }
    }
  }
  else{
    myString = ' ';
    for(var z = 1; z < size + 1; z++){
      if(z != 1){
        if(z % 2 == 0)
          myString = myString + '#';
        else
          myString = myString + ' ';
      }
    }
  }
  console.log(myString);
}