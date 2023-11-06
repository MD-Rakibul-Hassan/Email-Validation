const emailField = document.getElementById('emailField');
const emailLabel = document.getElementById('email-label');
const errorMessage = document.getElementById('errorMessage');
console.log(emailField)
console.log(emailLabel)
console.log(errorMessage)
function validateEmail () {
      emailLabel.style.bottom = "45px";
      if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            errorMessage.innerHTML = "Please enter a valid email";
            // return   false;
      } 
      else {
            errorMessage.innerHTML = "";
            // return true;
      }

}
