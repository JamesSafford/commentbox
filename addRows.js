
function onSubmit (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  const form = document.getElementById('form');


  let totalCharacters = commentArea.value.length;
  if (totalCharacters > 140) {
    event.preventDefault();
    alert('You have used a few too many characters, try again');
  } else {
    createComment(name, comment);
    form.reset();
  }
}

function createComment (name, comment) {

const commentContent = `<div class="form-response">
<span class="form-response-name">${name} said</span>
<span class="form-response-body">&nbsp"${comment}"</span>
</div>
`
  const commentLocation = document.getElementById('comment-location');
  const addCommentName = document.createElement('div');
  const commentInner = document.createTextNode(commentContent);
  addCommentName.appendChild(commentInner);
  commentLocation.appendChild(addCommentName);

  addCommentName.innerHTML = commentContent;
} 




// add row to comments table
// inject responses into row