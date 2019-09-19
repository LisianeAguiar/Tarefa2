import './style.css';

function changeColors () {

  var list = document.querySelectorAll(".divs");
  var newColor;
  var currentColor;

  for (var i = 0; i < list.length; i++) {
    
    if (i == 0) {

      newColor = window.getComputedStyle(list[list.length - 1]).backgroundColor; 
      currentColor = window.getComputedStyle(list[i]).backgroundColor;
      list[i].style.backgroundColor = newColor;
    }
    else {

      newColor = currentColor;
      currentColor = window.getComputedStyle(list[i]).backgroundColor;
      list[i].style.backgroundColor = newColor;
    }
  }
 
}

var btnEvent = document.getElementById("btn");
btnEvent.addEventListener("click", changeColors);