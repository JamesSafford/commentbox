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











