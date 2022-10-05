// JavaScript Document hunter page



// MENU OPEN/DICHT

var hamburgerButton = document.querySelector("header img:first-of-type");
var hetMenu = document.querySelector("header > section");

function menuAnimatie() {
hetMenu.classList.toggle("menuopen");
}

hamburgerButton.addEventListener("click", menuAnimatie);


// RACE VOICES

var humanTile = document.querySelector("main > section:nth-of-type(6) section div:first-of-type");
var humanAudio = document.querySelector("main > section:nth-of-type(6) section div:first-of-type > audio");
var dwarfTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(2)");
var dwarfAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(2) > audio");
var nightelfTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(3)");
var nightelfAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(3) > audio");
var gnomeTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(4)");
var gnomeAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(4) > audio");
var draeneiTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(5)");
var draeneiAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(5) > audio");
var worgenTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(6)");
var worgenAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(6) > audio");
var pandarenfemaleTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(7)");
var pandarenfemaleAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(7) > audio");
var orcTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(8)");
var orcAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(8) > audio");
var undeadTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(9)");
var undeadAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(9) > audio");
var taurenTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(10)");
var taurenAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(10) > audio");
var trollTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(11)");
var trollAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(11) > audio");
var bloodelfTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(12)");
var bloodelfAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(12) > audio");
var goblinTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(13)");
var goblinAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(13) > audio");
var pandarenmaleTile = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(14)");
var pandarenmaleAudio = document.querySelector("main > section:nth-of-type(6) section div:nth-of-type(14) > audio");

function speelAf1() {
    humanAudio.play();
}

function speelAf2() {
    dwarfAudio.play();
}

function speelAf3() {
    nightelfAudio.play();
}

function speelAf4() {
    gnomeAudio.play();
}

function speelAf5() {
    draeneiAudio.play();
}

function speelAf6() {
    worgenAudio.play();
}

function speelAf7() {
    pandarenfemaleAudio.play();
}

function speelAf8() {
    orcAudio.play();
}

function speelAf9() {
    undeadAudio.play();
}

function speelAf10() {
    taurenAudio.play();
}

function speelAf11() {
    trollAudio.play();
}

function speelAf12() {
    bloodelfAudio.play();
}

function speelAf13() {
    goblinAudio.play();
}

function speelAf14() {
    pandarenmaleAudio.play();
}


humanTile.addEventListener('mouseover', speelAf1);
dwarfTile.addEventListener('mouseover', speelAf2);
nightelfTile.addEventListener('mouseover', speelAf3);
gnomeTile.addEventListener('mouseover', speelAf4);
draeneiTile.addEventListener('mouseover', speelAf5);
worgenTile.addEventListener('mouseover', speelAf6);
pandarenfemaleTile.addEventListener('mouseover', speelAf7);
orcTile.addEventListener('mouseover', speelAf8);
undeadTile.addEventListener('mouseover', speelAf9);
taurenTile.addEventListener('mouseover', speelAf10);
trollTile.addEventListener('mouseover', speelAf11);
bloodelfTile.addEventListener('mouseover', speelAf12);
goblinTile.addEventListener('mouseover', speelAf13);
pandarenmaleTile.addEventListener('mouseover', speelAf14);


// EVENTUEEL KORTERE MANIER




// var Tiles = document.querySelectorAll("main > section:nth-of-type(6) section div");

// Tiles.forEach(function(element){
//     element.addEventListener('mouseover', function(){
//         element.querySelector('audio').play();
//     })
// })