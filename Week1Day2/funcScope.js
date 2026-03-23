let genderType = "female";

function printGender() 
{
        let color = "brown";

       if (genderType.startsWith("female"))
         {
         var age = 30;         

        let color = "pink"; 
        
        console.log("Inside if-block (color): " + color); // Prints "pink"
         }    
    console.log("Outside if-block (age): " + age); 
    console.log("Outside if-block (color): " + color); // Prints "brown"
}

printGender();
console.log("Global genderType: " + genderType);
console.log("--- Changing gender to male ---");
genderType = "male";
printGender(); 
