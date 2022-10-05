// JavaScript Document




// MENU OPEN/DICHT

var hamburgerButton = document.querySelector("header img:first-of-type");
var hetMenu = document.querySelector("header > section");

function menuAnimatie() {
hetMenu.classList.toggle("menuopen");
}

hamburgerButton.addEventListener("click", menuAnimatie);



// HERFST THEMA

var cattextButton = document.querySelector("main > section:nth-of-type(3) > section:first-of-type button");
var deBody = document.querySelector ("body");
var catImg = document.querySelector("main > section:nth-of-type(3) > section:first-of-type > img");
var leavesImg = document.querySelector("main > section:nth-of-type(3) > section:first-of-type > section > img:nth-of-type(2)")

function maakHerfstig() {
    deBody.classList.toggle('autumnbody');
    leavesImg.classList.toggle('visible');
}

cattextButton.addEventListener('click', maakHerfstig)


