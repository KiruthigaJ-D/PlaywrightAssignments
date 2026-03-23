
function checkPalindrome(str) {
        let characters = str.split("");
    let reversedStr = "";

    // 2. Loop them in reverse direction
    // 3. Concatenate the string
    for (let i = characters.length - 1; i >= 0; i--) {
        reversedStr += characters[i];
    }

    // 4. Print the new string
    console.log("Original:", str);
    console.log("Reversed:", reversedStr);

    // Palindrome check logic
        if (str.toLowerCase() === reversedStr.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
let result = checkPalindrome("Madam");
console.log("Is it a palindrome? " + result);

