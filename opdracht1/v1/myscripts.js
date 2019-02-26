/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

// Ik heb helaas voor mijn oplossing onclick moeten gebruiken, omdat hij anders voor mij
// niet wou werken. Onder deze javascript code heb ik een paar pogingen van hoe ik het
// liever gewild had.

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

blauwlabel.addEventListener('click', functieblauw);



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
