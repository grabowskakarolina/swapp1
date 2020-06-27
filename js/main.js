document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar')
  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add('shadow-bg')
    } else {
      nav.classList.remove('shadow-bg')
    }

  }
  window.addEventListener('scroll', addShadow)




  $(document).ready(function () {
    $(document).click(function (event) {
      var clickover = $(event.target);
      var _opened = $(".navbar-collapse").hasClass("show");
      if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
      }
    });
  });
});

const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('aside');

function showMenu() {
  menu.classList.toggle('active')
  if (menu.classList.contains('active')) {
    menuBtn.style.left = "300px"
  } else {
    menuBtn.style.left = "0"
  }
}
menuBtn.addEventListener('click', showMenu)

import Canvas from './Canvas.js';
import Form from './Form.js';

window.addEventListener('load', () => {
    new Canvas('#bg-anim', '.header');
    new Form('.form');  
});