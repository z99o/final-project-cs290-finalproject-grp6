// Handle user's clicks
window.addEventListener('click', function(event) {


  // When the user clicks the post button
  // (doesn't do anything yet)
  if (event.target.classList.contains("accept-button")) {
    createPost();
  }

  // When the user clicks the see comments button
  else if (event.target.classList.contains("view-comments-button")) {
    viewComments(event);
  }

  // If the user clicks the hide post button or the icon in the button
  else if (event.target.classList.contains("hide-post-button") ||
    event.target.parentNode.classList.contains("hide-post-button")) {
    hidePost(event);
  }

  else if (event.target.classList.contains("close-menu-button") ||
    event.target.parentNode.classList.contains("close-menu-button")) {
    hideMenu(event);
  }
});

// Shows/hides comments of the post that the user clicked on
function viewComments(event) {
  var post = event.target.parentNode.parentNode;
  var comments = post.getElementsByClassName("comment-container")[0];
  comments.classList.toggle("hidden");
}


function hidePost(event) {
  var button;
  // Gets the button element regardless of whether the user clicked
  // the icon or the button
  event.target.parentNode.classList.contains("hide-post-button") ?
    button = event.target.parentNode : button = event.target;

  var post = button.parentNode;
  var comments = post.getElementsByClassName("post-content")[0];
  comments.classList.toggle("hidden");
  var icon = button.firstChild;

  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
}

function hideMenu(event) {

  var menu = document.getElementsByClassName("menu-content")[0];
  menu.classList.toggle("hidden");

  // Gets the button element regardless of whether the user clicked
  // the icon or the button
  if (event.target.parentNode.classList.contains("close-menu-button")){
    var icon = event.target;
  } else {
    var icon = event.target.firstChild;
  }

  icon.classList.toggle("fa-chevron-right");
  icon.classList.toggle("fa-chevron-left");
}

function createPost(event) {
  var post = event.target.parentNode;
  var postText = post.getElementsByClassName("post-input")[0].value;

  var newPost = {
    postContent: postText
  };
  var postHTML = Handlebars.templates.postTemplate();

  var postContainer = document.getElementById("center-content");
  postContainer.insertAdjacentHTML('beforeend',postHTML);
}

var menu = document.getElementById('sideMenu');
menu.addEventListener('click', function() {
  document.getElementById("background").style.background = "lightblue";
})
