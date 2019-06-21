/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// code hulp credits van https://github.com/vreebua/frontendvoordesigners/tree/master/opdracht3

// hier is de file met al de informatie te vinden
var uri = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

// koppel het aan een element in de html
var button = document.querySelector("button");
var loaderElement = document.querySelector("span");
var section = document.querySelector('section');

// de functie van de hele json met de basis loop die ze moeten volgen. Deze loop geeft al de data van de json, echter heb ik gekozen maar een klein deel te tonen, vandaar de 1

function showData(jsonObj) {
    var films = jsonObj;
    console.log("showData films", films);

    for (var i = 0; i < 1; i++) {
        console.log("film " + i);
        var filmpiekijken = document.createElement('article');

        // Ik wou graag voor elke interactie een nieuw stukje data weergeven, daarom zijn ze allemaal apart gemaakt met hun eigen code

        // Begin van GENRE
        // Eerst vraag ik hoe ik de informatie wil vragen en hoe het moeten worden laten zien

        var genrelezen = document.createElement('ul');
        var genrebutton = document.createElement('button');
        genrebutton.textContent = "The genre (double click)";

        // Hierna loopt het door de loop van hierboven gegeven en vraag ik het zich te tonen

        var genres = films[i].genres;
        var listItem = document.createElement('li');
        listItem.textContent = ("genre: ", genres[i]);
        genrelezen.appendChild(listItem);

        //  Als ik op de button druk, krijg ik de informatie die ik wil lezen. Ook vertel ik welke interactie er moet worden uitgevoerd om de informatie te krijgen. Ook vertelt 'this' waar de functie moet worden uitgevoerd

        genrebutton.info = genrelezen;
        genrebutton.ondblclick = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde van GENRE


        // Begin van RELEASE DATE

        var releaselezen = document.createElement('ul');
        var releasebutton = document.createElement('button');
        releasebutton.textContent = "The release date (mouse over)";

        var listItem = document.createElement('li');
        listItem.textContent = films[i].release_date;
        releaselezen.appendChild(listItem);

        releasebutton.info = releaselezen;

        releasebutton.onmouseover = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde van RELEASE DATE


        // Begin van REVIEWS
        // Reviews heeft een eigen loop, omdat in de json de informatie in een array staat. Hierdoor moet ik specifiek opvragen welke ik wil en werkt de basis loop er niet bij

        var reviewslezen = document.createElement('ul');
        var reviewsbutton = document.createElement('button');
        reviewsbutton.textContent = "The reviews (key down)";

        var reviews = films[i].reviews;
        for (var j = 0; j < reviews.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = 'Score= ' + reviews[j].score + ' Made on= ' + reviews[j].created_at;
            reviewslezen.appendChild(listItem);
        }

        reviewsbutton.info = reviewslezen;

        reviewsbutton.onkeydown = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde van REVIEWS


        // Begin SIMPLE PLOT

        var simpleplotlezen = document.createElement('ul');
        var simpleplotbutton = document.createElement('button');
        simpleplotbutton.textContent = "1 sentence about the movie (key press)";

        var listItem = document.createElement('li');
        listItem.textContent = films[i].simple_plot;
        simpleplotlezen.appendChild(listItem);

        simpleplotbutton.info = simpleplotlezen;

        simpleplotbutton.onkeypress = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde PLOT EINDE


        // Begin PLOT

        var plotlezen = document.createElement('ul');
        var plotbutton = document.createElement('button');
        plotbutton.textContent = "2 sentences about the movie (key up)";

        var listItem = document.createElement('li');
        listItem.textContent = films[i].plot;
        plotlezen.appendChild(listItem);

        plotbutton.info = plotlezen;

        plotbutton.onkeyup = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde PLOT


        // Begin ACTORS

        var actorslezen = document.createElement('ul');
        var actorsbutton = document.createElement('button');
        actorsbutton.textContent = "Actors in the movie (context menu)";

        var actors = films[i].actors;
        for (var j = 0; j < actors.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            actorslezen.appendChild(listItem);
        }

        actorsbutton.info = actorslezen;

        actorsbutton.oncontextmenu = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde ACTORS


        // Begin DIRECTORs

        var directorslezen = document.createElement('ul');
        var directorsbutton = document.createElement('button');
        directorsbutton.textContent = "Director of the movie (copy)";

        var directors = films[i].directors;
        for (var j = 0; j < directors.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = directors[j].name;
            directorslezen.appendChild(listItem);
        }

        directorsbutton.info = directorslezen;

        directorsbutton.oncopy = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde DIRECTORS


        // Begin TITLE en COVER
        // Hierbij vraag ik 2 json id's in dezelfde interactie

        var antwoordlezen = document.createElement('ul');
        var antwoordbutton = document.createElement('button');
        antwoordbutton.textContent = "--- The answer! ---";

        var listItem = document.createElement('h2');
        listItem.textContent = films[i].title;
        antwoordlezen.appendChild(listItem);

        var listItem = document.createElement('img');
        listItem.src = films[i].cover;
        antwoordlezen.appendChild(listItem);

        antwoordbutton.info = antwoordlezen;

        antwoordbutton.onclick = function () {
            console.log("click this =" + this.info, this);
            this.info.classList.toggle('show')
        };

        // Einde TITLE en COVER



        // Dit koppelt al de data

        filmpiekijken.appendChild(genrebutton);
        filmpiekijken.appendChild(genrelezen);
        filmpiekijken.appendChild(releasebutton);
        filmpiekijken.appendChild(releaselezen);
        filmpiekijken.appendChild(reviewsbutton);
        filmpiekijken.appendChild(reviewslezen);
        filmpiekijken.appendChild(simpleplotbutton);
        filmpiekijken.appendChild(simpleplotlezen);
        filmpiekijken.appendChild(plotbutton);
        filmpiekijken.appendChild(plotlezen);
        filmpiekijken.appendChild(actorsbutton);
        filmpiekijken.appendChild(actorslezen);
        filmpiekijken.appendChild(directorsbutton);
        filmpiekijken.appendChild(directorslezen);
        filmpiekijken.appendChild(antwoordbutton);
        filmpiekijken.appendChild(antwoordlezen);

        // En hier koppelt het al deze informatie in het lege section in html

        section.appendChild(filmpiekijken);

    }
}



// Deze informatie zorgt ervoor dat de json juist wordt gevonden en geladen. Het stuurt een 'request' naar het json file om de informatie te pakken. Deze code is met hulp van het voorbeeld van opdracht 3

function loadimagesmetXHR() {
    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';

    // Hier wordt de info gevraagd

    request.send();

    // En hier ontvangen we de data

    request.addEventListener("load", function () {
        loaderElement.classList.remove('show');
        console.log("XHR data", request.response);
        console.table(request.response);
        showData(request.response);
    });
}

// Als je klikt op de button gezien in html, dan komt al de json tevoorschijn, maar door de functies van boven zijn ze nog verstopt

button.onclick = function () {
    loaderElement.classList.add('show');

    section.innerHTML = "";
    loadimagesmetXHR();
};
