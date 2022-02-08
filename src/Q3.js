// Q3.

function myFunction(num) {
    return num-1
}

let num = 10
num = myFunction(num)
console.log(num)

num = myFunction(num)
console.log(num)


/*The myFunction variable is delcared and has num has a parameter. It 
returns num-1. The num variable is declared with let meaning the value 
assigned to this variable can be changed. The value of 10 is assigned to
the num variable.

num is then called again (from let number) and is assigned with myFunction
with the num argument. The console log will print 9 because of the 
num - 1 in the return statement of the myFunction variable.

The same thing happens again where num is called and myFunction is assigned
with the num argument. The console log will print 8 because the value of 
num was changed to 9 from the previous declaration of num. */


/* The answer was 9 then 8 as expected.