//declare your variables for the text field and access DOM
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPass = document.getElementById('password2');
var username = document.getElementById('stackie1');
var form = document.getElementById('form');

//add event listener for Submit button
form.addEventListener('submit' , (event) => {
   event.preventDefault();
   validation(); 
});

function error(input , message){
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  
  errorMessage.innerText = message;
  formControl.classList.add('error')
  formControl.classList.remove('success')
}

function success(input){
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('small');
  
  errorMessage.innerText = '';
  formControl.classList.add('success')
  formControl.classList.remove('error')
}

//function to validate email using regular expression
function validateEmail(input){
     return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);

}

//function to check password length
function checkPassLen(pass){
     if(pass.length < 5){
       return false;
     }
  else{
    return true;
  }
}

function validation(){
  const emailInput = email.value;
  const passwordInput = password.value;
  const confPasswordInput = confirmPass.value;
  const usernameInput = username.value;
  
  if(emailInput === ''){
    error(email , 'Email is required')
  }
  else if(!validateEmail(emailInput)){
    error(email , 'Email is not valid');
  }
  else{
    success(email)
  }
  
  
  if(passwordInput === ''){
    error(password , 'Password  is required')
  }
  //check input length for password
  else if(!checkPassLen(passwordInput)){
    error(password , 'Password must be at least 5 characters')
  }
  else{
    success(password)
  }
  
  
  if(confPasswordInput === ''){
    error(confirmPass , 'Password2  is required')
  }
  //check the two passwords match
  else if(confPasswordInput !== passwordInput){
    error(confirmPass , 'Passwords do not match')
  }
  else{
    success(confirmPass)
  }
  
  
  
  if(usernameInput === ''){
    error(username , 'Username is required')
  }
  else{
    success(username)
  } 
  
}