// exercise 1: JavaScript Basics
//name: Jaymart Latigay
var text1 = "Hello1";
var text2 = "Hello1";
const person = "Jay";



function validatePassword(txt1, txt2) {
    var hasLowerCase = false;
    var hasUpperCase = false;
    var hasNumber = false;

    if(txt1 == txt2 && txt1.length >= 3) {
       for(let i = 0; i < txt1.length; i++) {
        const char = txt1.charAt(i);
        if(!isNaN(char)) {   //checks if a number is present
            hasNumber = true;
        }

        if(char === char.toLowerCase()) {
            hasLowerCase = true;
        }

        if(char === char.toUpperCase()) {
            hasUpperCase = true;
        }
       }
       if(hasNumber && hasUpperCase && hasLowerCase) {  //checks if all conditions are met
        return(true);
       } else return(false);
    } else return(false);
}


function reversePassword(txt1, txt2) {
    let reversedPass = "";
    let count = 0;

    if(validatePassword(txt1,txt2)) {
        for(i = txt1.length-1; i >= 0; i--) {  //iterates through the string starting from the last index
            reversedPass += txt1.charAt(i);
            count++;
        }
        return(reversedPass);
        
    } else return(txt1);  //returns the original password if at least one condition is not met in validatePassword function
}

function storePassword(name, pass1, pass2) {
    var newPass = reversePassword(pass1,pass2);
    const person_newPass = {
        "name": name,
        "newPassword": newPass,
    }
    return(person_newPass);
}

console.log(storePassword(person, text1, text2));