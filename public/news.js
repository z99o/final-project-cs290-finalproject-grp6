// Handle user's clicks
window.addEventListener('click', function(event) {

  // When the user clicks the post button
  if (event.target.classList.contains("accept-button")) {
    createPost(event);
  }

  if (event.target.classList.contains("post-comment-button")) {
    addComment(event);
  }

  // When the user clicks the see comments button
  else if (event.target.classList.contains("view-comments-button")) {
    viewComments(event);
  }

  // If the user clicks the hide post button or the icon in the button
  else if (event.target.classList.contains("hide-post-button") ||
    event.target.parentNode.classList.contains("hide-post-button")) {
    hidePost(event);
  } else if (event.target.classList.contains("close-menu-button") ||
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
  console.log(menu);
  menu.classList.toggle("hidden");

  // Gets the button element regardless of whether the user clicked
  // the icon or the button
  if (event.target.parentNode.classList.contains("close-menu-button")) {
    var icon = event.target;
  } else {
    var icon = event.target.firstChild;
  }

  console.log(icon);

  icon.classList.toggle("fa-chevron-right");
  icon.classList.toggle("fa-chevron-left");
}

//Helper function to get string of the page
function getPageIdFromURL() {
  var path = window.location.pathname;
  var pathParts = path.split('/');
  return pathParts[0];
}

function createPost(event) {

  var post = event.target.parentNode;
  var postText = post.getElementsByClassName("post-input")[0].value;
  if (!postText) {
    alert("Please enter a post");
  } else {

    var postRequest = new XMLHttpRequest();
    var requestURL = '/' + getPageIdFromURL();
    postRequest.open('POST', requestURL);
    var requestBody = JSON.stringify({
      postContent: postText,
      comments: []
    });

    postRequest.addEventListener('load', function (event) {
      if (event.target.status === 200) {
        var postTemplate = Handlebars.templates.postTemplate;
        var newPostHTML = postTemplate({
          postContent: postText,
          comments: []
        });
        var postContainer = document.getElementById('center-content');
        photoCardContainer.insertAdjacentHTML('beforeend', newPhotoCardHTML);
      } else {
        alert("Error posting: " + event.target.response);
      }
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.send(requestBody);





    /*
    var postHTML = Handlebars.templates.postTemplate(newPost);
    var postContainer = document.getElementById("center-content");
    postContainer.insertAdjacentHTML('beforeend', postHTML);
    */
  }
  /*
  var postRequest = new XMLHttpRequest();
  var requestURL = getPersonIdFromURL()  + '/addPhoto';
  postRequest.open('POST', requestURL);

  var requestBody = JSON.stringify({
    url: photoURL,
    caption: caption
  });

  postRequest.addEventListener('load', function (event) {
    if (event.target.status === 200) {
      var photoCardTemplate = Handlebars.templates.photoCard;
      var newPhotoCardHTML = photoCardTemplate({
        url: photoURL,
        caption: caption
      });
      var photoCardContainer = document.querySelector('.photo-card-container');
      photoCardContainer.insertAdjacentHTML('beforeend', newPhotoCardHTML);
    } else {
      alert("Error storing photo: " + event.target.response);
    }
  });

  postRequest.setRequestHeader('Content-Type', 'application/json');
  postRequest.send(requestBody);
  */

}

function addComment(event) {

  //IGNORE THIS MESS

  /*
  var commentText = event.target.parentNode.getElementsByClassName("comment-input")[0].value;
  var datetime = new Date();
  var timestamp = formatTimestamp(datetime);

  var commentHTML = document.createElement('div');
  var commentTextHTML = document.createElement('p');
  var datetimeHTML = document.createElement('p');
  commentHTML.classList.add("comment");
  commentTextHTML.classList.add("comment-text");
  datetimeHTML.classList.add("date-time");
  datetimeHTML.textContent = timestamp;
  commentTextHTML.textContent = commentText;

  commentHTML.appendChild(commentTextHTML);
  commentHTML.appendChild(datetimeHTML);

  */
  //event.target.parentNode.appendChild(commentHTML);
  //event.target.parentNode.insertAdjacentHTML('afterbegin',commentHTML.outerHTML());
  /*
   <div class="comment">
              <p class="comment-text">
                {{commentContent}}
              </p>
              <p class="date-time">
                {{commentDate}}
              </p>
            </div>
            */

  /*

  var newComment = {

    commentContent: commentText,
    commentDate: timestamp
  };

  console.log(newComment);

  var commentHTML = Handlebars.templates.commentTemplate(newComment);
  //var commentHTML = Handlebars.templates.commentTemplate(newComment);
  var commentContainer = event.target.parentNode;
  commentContainer.insertAdjacentHTML('afterbegin',commentContainer);*/
}

function formatTimestamp(datetime) {
  var hours = datetime.getHours();
  var minutes = datetime.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours == 0 ? 12 : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime + " " + (datetime.getMonth() + 1) + "/" + datetime.getDate() + "/" + datetime.getFullYear();
}
/*
var menu = document.getElementById('sideMenu');
menu.addEventListener('click', function() {
  document.getElementById("background").style.background = "lightblue";
})*/
