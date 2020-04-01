let menu = document.getElementById('menu');
let nav = document.getElementById('nav');
nav.hidden = true;
let icon = document.getElementById('menuicon')


menu.onclick = function() {
  if (nav.hidden) {
    nav.hidden = false;
  } else {
    nav.hidden = true;
  }
}

icon.onclick = function() {
    if (nav.hidden) {
    nav.hidden = false;
  } else {
    nav.hidden = true;
  }
}