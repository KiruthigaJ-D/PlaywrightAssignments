
// Example 1 & 2


function lengthOfLastWord(s)
{
let trimStr=s.trim();

let wordsArray= trimStr.split(" ")
console.log(wordsArray);

let lastWord = wordsArray[wordsArray.length-1];
console.log(lastWord.length);
}

lengthOfLastWord("Hello World");
lengthOfLastWord( " fly me to the moon ");

//Example 3

function isAnagram(str1, str2)
{
    if(str1.length !== str2.length)
    { return false;}
    let trimStr1=str1.toLowerCase().split('').sort().join('');
    let trimStr2=str2.toLowerCase().split('').sort().join('');
    return trimStr1 === trimStr2;
}

console.log("Silent and Listen is an Anagram: " + isAnagram('Listen', 'Silent'));
console.log("Hello and World is an Anagram: " + isAnagram('Hello', 'World'));