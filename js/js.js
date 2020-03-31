let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
let header = document.getElementsByTagName('HEADER')[0];
nav.hidden =true;


menu.onclick = function() {
  if (nav.hidden) {
    nav.hidden = false;
  } else {
    nav.hidden = true;
  }
}