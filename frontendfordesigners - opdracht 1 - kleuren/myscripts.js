/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/ /*eslint-env browser*/ /*eslint 'no-console': 0*/

// Ik vond het lastig om een passende javascript code te vinden met querySelector, classList en Eventlistener, alle drie samen. Het is helaas niet helemaal gelukt hoe ik het wou. Ik wou de website wel graag werkende hebben en heb daarom een onclick moeten gebruiken. Onder deze js code staan een aantal pogingen van hoe ik het liever werkend had gewild en de werkende code.

// Met deze functie vertel ik wat er moet gebeuren als er op de checkbox wordt gedrukt, die in de html staat. Hij laat een foto zien. Als de checkbox is gedrukt is de checkbox true (true=geklikt) en komt de foto tevoorschijn

var blauwlabel = document.querySelector(".blauwlabel");

function functieblauw() {

    var checkBox = document.querySelector(".blauwbox");

    var foto = document.querySelector(".blauwfoto");

    if (checkBox.checked === true) {
        foto.style.display = "block";
    } else {
        foto.style.display = "none";
    }
}

// Hier activeer ik de functie

blauwlabel.addEventListener('click', functieblauw);



// Dit heb ik herhaald voor de andere kleuren

var roodlabel = document.querySelector(".roodlabel");

function functierood() {

    var checkBox = document.querySelector(".roodbox");

    var foto = document.querySelector(".roodfoto");

    if (checkBox.checked === true) {
        foto.style.display = "block";
    } else {
        foto.style.display = "none";
    }
}

roodlabel.addEventListener('click', functierood);



var geellabel = document.querySelector(".geellabel");

function functiegeel() {

    var checkBox = document.querySelector(".geelbox");

    var foto = document.querySelector(".geelfoto");

    if (checkBox.checked === true) {
        foto.style.display = "block";
    } else {
        foto.style.display = "none";
    }
}

geellabel.addEventListener('click', functiegeel);



var groenlabel = document.querySelector(".groenlabel");

function functiegroen() {

    var checkBox = document.querySelector(".groenbox");

    var foto = document.querySelector(".groenfoto");

    if (checkBox.checked === true) {
        foto.style.display = "block";
    } else {
        foto.style.display = "none";
    }
}

groenlabel.addEventListener('click', functiegroen);


// Andere pogingen javascript:


// var checkbox = document.querySelector("#blauwbox");
// var foto = document.querySelector("#blauwfoto");

// function idk() {
//    foto.classList.toggle("block");
// }

// checkbox.addEventListener("click", idk, false);

//

// var span = document.getElementById("spanblauw");

// function myFunction() {

// var checkBox = document.getElementById("blauwbox");

//    var foto = document.getElementById("blauwfoto");

//    if (checkBox.checked === true) {
//        foto.style.display = "block";
//    } else {
//        foto.style.display = "none";
//    }
// }

// span.addEventListener('click', myFunction);

//

// var checkbox = document.querySelector("#blauwbox");
// var foto = document.querySelector("#blauwfoto");

// function idkk () {

// }

//

// var foto = document.getElementById("blauwfoto");

// document.getElementById("blauwbox").onclick = function idk() {
//    foto.classList.display("");
// };

//

// var checkbox;
// checkbox = document.querySelector(".blauwbox");

// var foto;
// foto = document.querySelector(".blauwfoto");

// checkbox.onclick = function ass() {
//    if (checkbox.checked === true) {
//        foto.classList.toggle = "block";
//    } else {
//        foto.classList.toggle = "none";
//    }

//    checkbox.addEventListener('click', ass);
// };

//

// var checkbox;
// checkbox = document.querySelector(".blauwbox");

// var foto;
// foto = document.querySelector(".blauwfoto");

// function ass() {
//    if (checkbox.checked === true) {
//        foto.classList.display = "block";
//    } else {
//        foto.classList.display = "none";
//    }
// }

// checkbox.addEventListener('click', ass);

//

// function idkkk() {

//    var checkBox = document.querySelector(".blauwbox");

//    var foto = document.querySelector(".blauwfoto");

//    checkbox.change(function () {

//        if (checkbox.is(':checked')) {

//            foto.show("block");

//        } else {

//            foto.hide("none");

//        }
//    });
// }

//

// document.getElementById('active').onclick = function () {

//    toggleSub(this, '.blauwfoto');
// };


// function toggleSub(box) {

//    var foto = document.querySelector('.blauwfoto');

//    if (box.checked) {
//        foto.style.display = 'block';
//    } else {
//        foto.style.display = 'none';
//    }
// }
