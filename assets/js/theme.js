let mybutton = document.getElementById("topBtn");
let footer = document.querySelector("footer");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let footerTop = footer.getBoundingClientRect().top;

    if ((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) && footerTop > window.innerHeight) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let menu = document.querySelector(".menu");
let cross = document.querySelector(".cross");
let overlay = document.querySelector(".overlay");
let phoneMenu = document.querySelector(".phoneMenu");

menu.onclick = function() {
    phoneMenu.style.display = "flex";
    overlay.style.display = "block";
    menu.style.display = "none";
    cross.style.display = "block";
}

cross.onclick = function() {
    phoneMenu.style.display = "none";
    overlay.style.display = "none";
    cross.style.display = "none";
    menu.style.display = "block";
}

let apstiprinat = document.querySelector(".apstiprinat"); 
let noraidit = document.querySelector(".noraidit"); 
let cookies = document.querySelector(".cookies"); 

apstiprinat.onclick = function() {
    cookies.style.display = "none";
}

noraidit.onclick = function() {
    cookies.style.display = "none";
}