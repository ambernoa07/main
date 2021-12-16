// JavaScript Document



var hamburgerButton = document.querySelector("header img:first-of-type");
var hetMenu = document.querySelector("nav");

function menuAnimatie() {
hetMenu.classList.toggle("menuopen");
}

hamburgerButton.addEventListener("click", menuAnimatie);



var cattextButton = document.querySelector("main > section:nth-of-type(3) > article:nth-of-type(3) > p:nth-of-type(3)");
var deBody = document.querySelector ("body");

function maakHerfstig() {
    deBody.classList.add('autumnbody');
}

cattextButton.addEventListener('click', maakHerfstig)