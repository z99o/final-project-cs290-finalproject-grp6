var get_commend = document.getElementById('add-commend');
var button = document.getElementById('commend-button-id');
console.log(button);


/*
button.addEventListener('click',function(){
  document.getElementById('twit-commend').className = 'visible';
  console.log('clicked');
});
*/

button.onclick = function(){
  document.getElementById('add-commend').className = 'visible';
};

a