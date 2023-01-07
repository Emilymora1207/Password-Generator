// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function for Generating the password
function generatePassword(){
//arrays of variables for the character types
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "@", "#", "%", "^", "&", "*", "?", "-", "_", "=", "+"];

var passwordLength
function confirmPasswordLength(){
passwordLength = window.prompt("Type password length")
// confirms that onely a number between 8 and 128 is written 
  if (passwordLength<8||passwordLength>128 || isNaN(passwordLength)){
    window.alert("Please choose a number between 8 and 128.")
    confirmPasswordLength()
  }
}
confirmPasswordLength()
var confirmUpperCase
var confirmLowerCase
var confirmNumbers
var confirmSpecial

//Asks if each type of character is needed 
function confirmCriteria() {
confirmUpperCase = window.confirm("Do you need uppercase letters?")
confirmLowerCase = window.confirm("Do you need lowercase letter?")
confirmNumbers = window.confirm("Do you need numbers?")
confirmSpecial = window.confirm("Do you need Special Characters?")
}
confirmCriteria()

//will redo confirming criteria if they said they do not need any of the character types
if (confirmUpperCase===false && confirmLowerCase===false && confirmNumbers === false && confirmSpecial===false) {
  window.alert("Please Confirm at least one criteria.")
  confirmCriteria()
}

//separate blank array for the total characters needed
var totalCharacters = []

//adding each type of character needed to totalCharacters
if (confirmUpperCase===true) {
  totalCharacters = totalCharacters.concat(upperCase)
}
if (confirmLowerCase===true) {
  totalCharacters = totalCharacters.concat(lowerCase)
}
if (confirmNumbers===true) {
  totalCharacters = totalCharacters.concat(numbers)
}
if (confirmSpecial===true) {
  totalCharacters = totalCharacters.concat(special)
}
console.log(totalCharacters)

//blank variable string for the password
var makePassword = []

//formula to randomly pull characters from the totalCharacters array
function makingPassword() {
  for (i=0; i<passwordLength; i++){
    var index = Math.floor(Math.random() * totalCharacters.length)
    makePassword=makePassword+totalCharacters[index]
  }
}
makingPassword()

if (confirmUpperCase === true && (totalCharacters.includes(upperCase[Any])===false)){
  makingPassword()
} else if (confirmLowerCase === true && (totalCharacters.includes(lowerCase[Any])=== false)){
  makingPassword()
} else if (confirmNumbers == true && (totalCharacters.includes(numbers[Any])=== false)) {
  makingPassword()
} else if (confirmSpecial=== true && (totalCharacters.includes(special[Any])=== false)){
  makingPassword()
} 
return makePassword
}

