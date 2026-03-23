
function isOddOrEven (num){

    if (num % 2 === 0 )
    {
        return "Even";
    }
    else 
        return "Odd";


}

let ipNum = 14;
console.log (`The given number ${ipNum} is ${isOddOrEven(ipNum)}`);