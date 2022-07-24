var userChoices = [];
var characterLength = [];

var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChars = ['!', '#', '$', '%', '&', '*', '?', '@', '+']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Obtaining parameters for password creation
function promptInputs() {
  userChoices = [];
  characterLength = parseInt(prompt("Please enter your desired password length (8-128 characters accepted"));

// Checking that prompt reply is a numeric value
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Invalid entry! Please insert a number between 8 and 128");
    return false;
  }
  if (confirm("Do you want to include lowercase letters?")) {
    userChoices = userChoices.concat(lowercaseChars);
  }
  if (confirm("Do you want to include uppercase letters?")) {
    userChoices = userChoices.concat(uppercaseChars);
  }
  if (confirm("Do you want to include special characters?")) {
    userChoices = userChoices.concat(specialChars);
  }
  if (confirm("Do you want to include numbers?")) {
    userChoices = userChoices.concat(numericChars);
  }
  return true;

}

  // Write password to the #password input
  function writePassword() {
    var noIssues = promptInputs();

    if (noIssues) {
      var newPassword = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = newPassword;
    }
  }

//Creating password by grabbing values from array based on prompt choices
function generatePassword () {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomize = Math.floor(Math.random() * userChoices.length);
      password = password + userChoices[randomize];
  }
    return password;
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
