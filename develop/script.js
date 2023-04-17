// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How long do you want your password?")
// Password length
  while (passwordLength < 8 || passwordLength > 12) {
    passwordLength =prompt("Enter a valid password length (8-12 characters)");
  }

  var includeNumbers = confirm("Do you want to include numbers in your password?")
  var includeSpecialChars = confirm("Do you want to include special characters in your password?")
  var includeLowercase = confirm("Do you want to include lower case in your password?")
  var includeUppercase = confirm("Do you want to include upper case in your password?")
  
  // Character sets to include in password
  const numbers = "0123456789"
  const SpecialChars = "!@#$%^&*()_+{}[];,.<>?"
  const Lowercase = "abcdefghijklmnopqrstuvwxyz"
  const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

   // Determine which character sets to include
   let characterSet = "";
  if (includeUppercase) {
    characterSet += Uppercase;
  }
  if (includeNumbers) {
    characterSet += numbers;
  }
  if (includeSpecialChars) {
    characterSet += SpecialChars;
  }
  if (includeLowercase) {
    characterSet += Lowercase;
  }

// Generate the password
  let password = generatePassword(passwordLength, characterSet);
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
 
// Generate a password using the selected character set
function generatePassword(passwordLength, characterSet){
  let password =""
  for (let i = 0; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
