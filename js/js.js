let menu = document.getElementById('menu');
let nav = document.getElementById('nav');

menu.onclick = function() {
  if (nav.style.display==='none') {
    nav.style.display = 'initial';
  } else {
    nav.style.display = 'none';
  }
}