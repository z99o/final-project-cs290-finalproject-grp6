console.log("js loaded");
window.addEventListener('click', function(event) {

  console.log("click registered");
  if (event.target.classList.contains("close-menu-button") ||
    event.target.parentNode.classList.contains("close-menu-button")) {
    hideMenu(event);
  }
});


function hideMenu(event) {
  var menu = document.getElementsByClassName("menu-content")[0];
  menu.classList.toggle("hidden");

  // Gets the button element regardless of whether the user clicked
  // the icon or the button
  if (event.target.parentNode.classList.contains("close-menu-button")) {
    var icon = event.target;
  } else {
    var icon = event.target.firstChild;
  }

  icon.classList.toggle("fa-chevron-right");
  icon.classList.toggle("fa-chevron-left");
}
