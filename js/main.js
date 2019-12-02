document.body.onload = setMobile;
window.addEventListener("resize", setMobile);

var circle = document.getElementById("circle");
var menu = document.getElementById("menu");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var rroom = document.getElementById("rroom");
var address = document.getElementById("address");

circle.src = "images/circle.png";

circle.style.opacity = "0.7";
menu.style.opacity = "0.7";
nav1.style.opacity = "0.7";
nav2.style.opacity = "0.7";
nav3.style.opacity = "0.7";

nav1.style.top = "-5%";
nav2.style.top = "-5%";
nav3.style.top = "-5%";

nav1.innerHTML = "News";
nav2.innerHTML = "Shop";
nav3.innerHTML = "About";
address.innerHTML = "2601 W Dunlap Ave. Phoenix, AZ 85021";
rroom.src = "images/sign.PNG";

circle.onmouseover = highText;
circle.onmouseout = regText;
menu.onmouseover = highText;
menu.onmouseout = regText;
nav1.onmouseover = highText;
nav1.onmouseout = regText;
nav2.onmouseover = highText;
nav2.onmouseout = regText;
nav3.onmouseover = highText;
nav3.onmouseout = regText;

circle.onclick = goFace;
menu.onclick = showMenu;
address.onclick = goMaps;

function setMobile() {
  var w = window.innerWidth;

  if (w < 1000) {
    window.location.replace("m.html");
  }
}

function goFace() {
  window.location.href = "https://www.facebook.com/TheRecordRoom/";
}

function highText() {
  this.style.opacity = "1";
}

function regText() {
  this.style.opacity = "0.7";
}

function showMenu() {
  if (nav1.style.top == "-5%") {
    nav1.style.top = "10%";
    nav2.style.top = "10%";
    nav3.style.top = "10%";
    menu.style.transform = "rotate(-90deg)";
  } else {
    nav1.style.top = "-5%";
    nav2.style.top = "-5%";
    nav3.style.top = "-5%";
    menu.style.transform = "rotate(0deg)";
  }
}

function goMaps() {
  window.location.href = "https://www.google.com/maps/place/The+Record+Room/@33.5703568,-112.123404,15z/data=!4m8!1m2!2m1!1srecord+room!3m4!1s0x0:0x7d247de177608ff4!8m2!3d33.5688612!4d-112.1154785";
}
