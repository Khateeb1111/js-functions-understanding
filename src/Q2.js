// Q2. 

function myFunction(num1, num2) {
    return num1 + num2
}

const result = myFunction(5,5);

console.log(result)


/* The myFunction variable is declared and num1 and num2 are parsed in as
arguments. The num1 parameter is added to num2 due to the addition 
operator. Another variable called result is declared and myFunction is
assigned to the variable. The values 5 derives from num1 and the other 5
derives from num2. 

They are added together and I expect:

RESULT TO EQUAL 10.
*/


/* The answer was 10 as expected but I forgot to add return - schoolboy
error, and so I got undefined when trying to print console.log.
*/