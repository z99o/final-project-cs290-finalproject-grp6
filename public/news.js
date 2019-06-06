
// Handle user's clicks
window.addEventListener('click', function(event)
{

  // When the user clicks the post button
  // (doesn't do anything yet)
  if(event.target.classList.contains("accept-button"))
  {
    console.log("post button clicked");
  }

  // When the user clicks the see comments button
  else if(event.target.classList.contains("view-comments-button"))
  {
    viewComments(event);
  }
});

// Shows/hides comments of the post that the user clicked on
function viewComments(event)
{
  var post = event.target.parentNode.parentNode;
  var comments = post.getElementsByClassName("comment-container")[0];
  comments.classList.toggle("hidden");
}
