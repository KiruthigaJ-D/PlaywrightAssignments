
function checkNumber(num)
{
    if (num > 0)
        return "Positive";
    else if (num < 0)
        return "Negative";
     else 
        return "Neutral(Zero)";
    
}

let testNumber = 15;

let result = checkNumber(testNumber);
console.log("The number " + testNumber + " is: " + result);
console.log("Result for -5: " + checkNumber(-5));
console.log("Result for 0: " + checkNumber(0));

