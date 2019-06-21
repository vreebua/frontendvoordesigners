/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Hier heb ik meerdere variablen gemaakt die zich verbinden met een html element

var knopp = document.getElementById('knop');
var knoppTerug = document.getElementById('knop2');
var dbl = document.getElementById('knopdbl');
var dblTerug = document.getElementById('knop2dbl');
var status = 'foto';
var imgg = document.getElementById('foto');

// In deze functie vraag ik wat de gegeven foto op het moment is en vertel ik welke foto er komt als er op wordt gedrukt. Status vertelt de foto op het moment, img.src vertelt de nieuwe foto en status eronder vertelt de naam van die foto. Als je klikt ontvang je een 'return' en deze return vertelt de status van de nieuwe foto, wat die dan laat zien

function imgVeranderen() {
    if (status == 'foto') {
        imgg.src = 'images/foto2.JPG';
        status = 'foto1';
        return status;
    } else if (status == 'foto1') {
        imgg.src = 'images/foto3.JPG';
        status = 'foto2';
        return status;
    } else if (status == 'foto2') {
        imgg.src = 'images/foto4.JPG';
        status = 'foto3';
        return status;
    } else if (status == 'foto3') {
        imgg.src = 'images/foto5.JPG';
        status = 'foto4';
        return status;
    } else if (status == 'foto4') {
        imgg.src = 'images/foto6.JPG';
        status = 'foto5';
        return status;
    } else if (status == 'foto5') {
        imgg.src = 'images/foto7.JPG';
        status = 'foto6';
        return status;
    } else if (status == 'foto6') {
        imgg.src = 'images/foto8.JPG';
        status = 'foto7';
        return status;
    } else if (status == 'foto7') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    }
}

// Dezelfde functie hier, maar is ie omgedraaid

function imgterug() {
    if (status == 'foto8') {
        imgg.src = 'images/foto8.JPG';
        status = 'foto7';
        return status;
    } else if (status == 'foto7') {
        imgg.src = 'images/foto7.JPG';
        status = 'foto6';
        return status;
    } else if (status == 'foto6') {
        imgg.src = 'images/foto6.JPG';
        status = 'foto5';
        return status;
    } else if (status == 'foto5') {
        imgg.src = 'images/foto5.JPG';
        status = 'foto4';
        return status;
    } else if (status == 'foto4') {
        imgg.src = 'images/foto4.JPG';
        status = 'foto3';
        return status;
    } else if (status == 'foto3') {
        imgg.src = 'images/foto3.JPG';
        status = 'foto2';
        return status;
    } else if (status == 'foto2') {
        imgg.src = 'images/foto2.JPG';
        status = 'foto1';
        return status;
    } else if (status == 'foto1') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    }
}

// Dezelfde functie, maar nu met een dubbel klik als interactie

function imgVeranderendbl() {
    if (status == 'foto') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    } else if (status == 'foto1') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    } else if (status == 'foto2') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    } else if (status == 'foto3') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    } else if (status == 'foto4') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    } else if (status == 'foto5') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    } else if (status == 'foto6') {
        imgg.src = 'images/foto9.JPG';
        status = 'foto8';
        return status;
    }
}


function imgterugdbl() {
    if (status == 'foto8') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    } else if (status == 'foto7') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    } else if (status == 'foto6') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    } else if (status == 'foto5') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    } else if (status == 'foto4') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    } else if (status == 'foto3') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    } else if (status == 'foto2') {
        imgg.src = 'images/foto1.JPG';
        status = 'foto';
        return status;
    }
}

// In deze functie vertel ik wat er moet worden laten zien als de keycode is ingedrukt

window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
    if (key.keyCode == "49") {
        imgg.src = 'images/foto1.JPG';
    } else if (key.keyCode == "50") {
        imgg.src = 'images/foto2.JPG';
    } else if (key.keyCode == "51") {
        imgg.src = 'images/foto3.JPG';
    } else if (key.keyCode == "52") {
        imgg.src = 'images/foto4.JPG';
    } else if (key.keyCode == "53") {
        imgg.src = 'images/foto5.JPG';
    } else if (key.keyCode == "54") {
        imgg.src = 'images/foto6.JPG';
    } else if (key.keyCode == "55") {
        imgg.src = 'images/foto7.JPG';
    } else if (key.keyCode == "56") {
        imgg.src = 'images/foto8.JPG';
    } else if (key.keyCode == "57") {
        imgg.src = 'images/foto9.JPG';
    }
}

// Hier worden de functies geactiveerd met een element uit de html

knopp.addEventListener('click', imgVeranderen);
dbl.addEventListener('dblclick', imgVeranderendbl);

knoppTerug.addEventListener('click', imgterug);
dblTerug.addEventListener('dblclick', imgterugdbl);
