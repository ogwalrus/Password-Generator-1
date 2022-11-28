// Assignment Code
var upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numChars = ["0","1","2","3","4","5","6","7","8","9"];
var specialChars = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","\\","|",";",":","\'","\"",",",".","/","<",">","?"];
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var hasLowerCase;
var hasUpperCase;
var hasNumbers;
var hasSpecial;
var randomInput;
// Write password to the #password input
function writePassword() {
  while (passwordLength < 8 || passwordLength >128){
    passwordLength = prompt("How many characters would you like your password to be?(8-128)");
  if(passwordLength<8 || passwordLength > 128){
    alert("Please enter a valid password length(8-128).");
  }
  }
  
  if(confirm("Would you like your password to contain lower case letters?")){
    hasLowerCase = true;
  } else {
    hasLowerCase = false;
  }
  if(confirm("Would you like your password to contain upper case letters?")){
    hasUpperCase = true;
  } else {
    hasUpperCase = false;
  }
  if(confirm("Would you like your password to contain numbers?")){
    hasNumbers = true;
  } else {
    hasNumbers = false;
  }
  if(confirm("Would you like your password to contain special characters?")){
    hasSpecial = true;
  } else {
    hasSpecial = false
  }
  if(!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecial){
    alert("You must select at least one criteria for your password.");
    writePassword();
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var password = "";
  var selection = [];
  if(hasLowerCase){
    selection = selection.concat(lowerCaseChars);
  }
  if(hasUpperCase){
    selection = selection.concat(upperCaseChars);
  }
  if(hasNumbers){
    selection = selection.concat(numChars);
  }
  if(hasSpecial){
    selection = selection.concat(specialChars);
  }
  for(var i = 0; i < passwordLength; i++){
    randomInput = Math.floor(Math.random() * selection.length);
    password += selection[randomInput];
  }
  passwordLength = 0;
  return password;
  
  // console.log(lowerCaseChars.length + upperCaseChars.length + numChars.length + specialChars.length);
  // console.log(selection);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
