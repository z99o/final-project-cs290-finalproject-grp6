
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
  else if(event.target.classList.contains("hide-post-button"))
  {
    hidePost(event);
  }
});

// Shows/hides comments of the post that the user clicked on
function viewComments(event)
{
  var post = event.target.parentNode.parentNode;
  var comments = post.getElementsByClassName("comment-container")[0];
  comments.classList.toggle("hidden");
}


function hidePost(event)
  {
    var post = event.target.parentNode;
    var comments = post.getElementsByClassName("post-content")[0];
    comments.classList.toggle("hidden");

    if(event.target.innerHTML =="v")
    {
      event.target.innerHTML ="&#652";
    }
    else
    {
      event.target.innerHTML ="v";
    }
  }


var menu = document.getElementById('sideMenu');
menu.addEventListener('click', function(){
  document.getElementById("background").style.background = "lightblue";
})

