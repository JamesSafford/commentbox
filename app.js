// if (document.readyState == 'loading'){
//   document.addEventListener('DOMContentLoaded', ready);
// } else{
//   ready()
// }
// const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', () => {
//   console.log('submit, baby')
// });

// function ready(){ 
// // const removeCartItemButtons = document.getElementsByClassName('btn-danger')
// // for (let i = 0; i < removeCartItemButtons.length; i++) {
// //   let button = removeCartItemButtons[i];
// //   button.addEventListener('click', removeCartItem);
// //   }

//   const submitButton = document.getElementsByClassName('submit-button');
//   for (let i = 0; i< submitButton.length; i++){
//     let button = submitButton[i];
//     button.addEventListener('click', submitCommentClick);
//   }

//   document.getElementsByClassName('form-submit')[0].addEventListener('click', submitButton);
//   console.log(submitButton)

// }



// // function quantityChanged(event, title) {
// //   console.log(CARTROWS);

// //   console.log(title);

// //   const input = event.target;
// //   let value = input.valueAsNumber;
// // if (isNaN(value) || value <= 0){
// //   value = 1;
// //   input.value = value;
// // }
// // CARTROWS[title].quantity = value;


// // updateCartTotal();

// // }

// function submitCommentClick(event) {
//   const button = event.target;
//   const commentDetails = button.parentElement;
//   const name = commentDetails.getElementsByClassName('form-name')[0];
//   const email = commentDetails.getElementsByClassName('form-email')[0];
//   const comment = commentDetails.getElementsByClassName('form-comment')[0];

//   nextComment(name, email, comment);

//   // updateCartTotal();
  
// }
// // let CARTROWS = {};

// function nextComment(name, email, comment) {
//   const commentRow = document.createElement('div');
//   commentRow.classList.add('form-response');
//   const commentListItems = document.getElementsByClassName('form-response')[0];
//   const commentListItemCopy = commentListItems.getElementsByClassName('form-response-body');
//   }
//   // const inputElement = document.createElement('input');
//   // inputElement.className = "cart-quantity-input"; 
//   // inputElement.type = "number";
//   // inputElement.value = 1;
//   // inputElement.addEventListener('change', (event) => quantityChanged(event, title))

//   const commentContents = `<div class="form-response">
//   <span class="form-response-name"> ${name}</span>
//   <span class="form-response-email"> ${email}</span>
// </div>
// <span class="form-response-body">${comment}</span>
// `
// // // use this to write timestamp????? const dangerButton = document.createElement("button");
// // dangerButton.classList.add("btn", "btn-danger");
// // dangerButton.innerText = "REMOVE";
// // const buttonContainer = document.createElement("div");
// // buttonContainer.classList.add("cart-quantity", "cart-column");
// // // buttonContainer.appendChild(inputElement);

// // commentRow.innerHTML = commentContents;
// // // appending the timestamp happens here commentRow.appendChild(buttonContainer)
// // commentListItemCopy.append(commentRow);
//   // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', (event) => removeCartItem(event, title));


// // function updateCartTotal() {
// //   // console.log(CARTROWS)
// //   let totalItems = 0;


// {/*ADD ME TO THE response <span class="form-response-timestamp"> ${timestamp}</span> */}

  
// //   let total = 0;
// //   Object.values(CARTROWS).forEach((row) => {
// //     total += row.price * row.quantity;
// //     totalItems += row.quantity;
// //   }) 

// //   let totalString = (Math.round(total * 100) / 100).toString();
// //   const positionAfterDot = totalString.split('.')[1]?.length;
// //     if (!positionAfterDot) {
// //       totalString += ".00"
// //     } else if (positionAfterDot === 1) {
// //       totalString += "0"
// //     };
    
// //   document.getElementsByClassName('cart-total-price')[0].innerText = '£' + totalString;
// //   document.getElementsByClassName('cart-total-items')[0].innerText = totalItems;
// // }

const commentArea = document.getElementById('comment');
const remainingCharacters = document.getElementById('copycount');
const submitButton = document.getElementById('submit-button');
const maxCharacters = 140;


commentArea.addEventListener('input', () => {
  let remaining = maxCharacters - commentArea.value.length;
  const colour = remaining < maxCharacters * 0.1 ? 'red' : null;


  if (remaining > 1) {
    remainingCharacters.textContent = `${remaining} characters remaining`;
  } else if (remaining <= 0) {remainingCharacters.textContent = `no characters remaining`;} 
  else {
    remainingCharacters.textContent = `1 character remaining`;
  }
  remainingCharacters.style.color = colour;
});

submitButton.addEventListener('click', (e) => {
  let totalCharacters = commentArea.value.length;
  if (totalCharacters < 140){
 console.log('hi')
  } else {
    e.preventDefault();
    console.log('back off, bitch');
  }

})






