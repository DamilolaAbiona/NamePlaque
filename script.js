// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');
const inputCheck= document.querySelector('.input-check')
const Success = document.querySelector('.success')
const buyNowbtn = document.querySelector('.buy-submit');



// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
  // reset empty box when letter is entered
  inputCheck.textContent =''
  inputCheck.style.backgroundColor = ''
  // print success when user input letter
  Success.textContent = "Success!!!"
    Success.style.backgroundColor = 'green'
  // Warn user for exceeding letters
   if (userInput.value.length > 15) {
  Success.textContent = "You have Exceeded the number of  available Letters !!!"
    Success.style.backgroundColor = 'red'
  
 }
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}
//buyNow function 
const buyNow = ()=>{
  // check if input field is empty
  if ( userInput.value.length === 0) {
     inputCheck.textContent = "Enter a new text !!!"
     inputCheck.style.backgroundColor = 'hotpink'
      Success.textContent = ''
    Success.style.backgroundColor = ''
 }

  // check if input equals default text
  else if (userInput === userLeterPreview ) {
   inputCheck.textContent = "Enter a new text !!!"
    inputCheck.style.backgroundColor = 'hotpink'
    Success.textContent = ''
    Success.style.backgroundColor = ''
  }
  // Thanks for patronage
   else{
  Success.textContent = "Thanks for patronage !!!"
    Success.style.backgroundColor = '#00e2fj'
 }
//  warn user for Exceeding available letters
 if (userInput.value.length > 15) {
  Success.textContent = "You have Exceeded the number of  available Letters !!!"
    Success.style.backgroundColor = 'red'
  
 }
}
  

 

 buyNowbtn.addEventListener('click', buyNow);
