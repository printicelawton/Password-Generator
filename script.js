
// Assignment Code


// The follow are for my prompt questions. 
//var passwordQuestions = prompt("Would you like to select your Password Criteria?");
//var length = prompt("Number of characters?")
//var characters = prompt("Would you like to include special characters?")

//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


var generateBtn = document.querySelector("#generate");
var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var characterNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var upperNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var symbols = ["'!", "2", "#", "$", "%", "^", "&", "*", "+,"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  var charLength = prompt("How many characters do you want in your new password?");
  var whichCase = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers in your password?");
  var sym = confirm("Do you want to include special characters?")

 // This creates a local variable for the password instead of getting the DOM object with id="password that I got in my second commit"
 let password = '';

  console.log(charLength);
  console.log(whichCase);
  console.log(num);
  console.log(sym)

  // if uppercase and numbers are confirmed
  if (num === true && whichCase === true) {
    for (var i = 0; i < charLength; i++) {

      charPick = upperNum[Math.floor(Math.random() * upperNum.length)];
      console.log(charPick);
      password = password.toString() + charPick.toString();
      console.log(password);



    }
  }
//if symbol and uppercase are confirmed 
  if (sym === true && whichCase != true) {
    for (var i = 0; i < charLength; i++) {

      charPick = symbols[Math.floor(Math.random() * upperNum.length)];
      console.log(charPick);
      password = password.toString() + charPick.toString();
      console.log(password);



    }
  }

  //if uppercase but no numbers
  else if (num != true && whichCase === true) {
    for (var i = 0; i < charLength; i++) {

      charPick = upperChars[Math.floor(Math.random() * upperChars.length)];
      console.log(charPick);
      password = password.toString() + charPick.toString();
      console.log(password);



    }
  }
  // numbers no uppercase
  else if (num === true && whichCase != true) {
    for (var i = 0; i < charLength; i++) {

      charPick = characterNum[Math.floor(Math.random() * characterNum.length)];
      console.log(charPick);
      password = password.toString() + charPick.toString();
      console.log(password);
    }

  } else if (num != true && whichCase != true) {
    for (var i = 0; i < charLength; i++) {

      charPick = characters[Math.floor(Math.random() * characters.length)];
      console.log(charPick);
      password = password.toString() + charPick.toString();
      console.log(password);


    }
  }
  return password;
}
