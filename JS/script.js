// déclaration et affectation des variables contenant les données ou les options

// variables globales
let svg;
let graphique;
let voiture1;
let voiture2;
let voiture3;
let voiture4;
let voiture5;
let voiture6;
let titre;
let voituresVisibles = true;
let info=true;
let info2020;
let info2021;
let info2022;
let info2023;
let info2024;
let info2030;

let grosTitre;
let mots; 
let span;
let x;
let y;

// déclaration des fonctions classiques

// déclaration des fonctions de callback
// déclaration des fonctions d'animation
// fonction qui permet de faire grossir les voitures au survol
function grossir() {
    console.log("Grossir appelé");
    this.animate({ transform : 's2,2,' + this.getBBox().cx + ',' + this.getBBox().cy}, 100, mina.easeinout);
}
// fonction pour que les voitures regagne leur taille de base
function initiale() {
    this.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 100, mina.easeinout);
}

// fonction pour positionner toutes les voitures au début de la piste de course
function positionnerVoitures() {
    voiture1.transform(`t(-20, 0)`);
    voiture2.transform(`t(-60, 0)`);
    voiture3.transform(`t(-100, 0)`);
    voiture4.transform(`t(-120, 0)`);
    voiture5.transform(`t(-130, 0)`);
    voiture6.transform(`t(-750, 0)`);
}
// fonction pour faire aller les voitures à leur place de base
function voituresDeplacement() {
    voiture1.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 500, mina.easeinout);
    voiture2.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 500, mina.easeinout);
    voiture3.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 500, mina.easeinout);
    voiture4.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 500, mina.easeinout);
    voiture5.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 500, mina.easeinout);
    voiture6.animate({ transform: 's1,1,' + this.getBBox().cx + ',' + this.getBBox().cy }, 500, mina.easeinout);
}

// Fonction pour animer le titre de haut en bas
function effetVague() {
    titre.animate({ transform: 't(0, 5)' }, 500, mina.easeinout, function() {
    titre.animate({ transform: 't(0, -5)' }, 500, mina.easeinout, effetVague);
    });
}
// fonction pour masquer et démasquer les voitures
function masquerVoitures() {
    // si voituresVisibles est vrai mettre l'opacité à zéro des voitures
    if (voituresVisibles) {
        // Rendre les voitures transparentes
        voiture1.attr({ opacity: 0 });
        voiture2.attr({ opacity: 0 }); 
        voiture3.attr({ opacity: 0 });
        voiture4.attr({ opacity: 0 });
        voiture5.attr({ opacity: 0 });
        voiture6.attr({ opacity: 0 });
        // modifier le texte du bouton
        bouton.innerText = "Afficher les Voitures";
    } 
    // Sinon mettre l'opacité à 1
    else {
        // Afficher les voitures
        voiture1.attr({ opacity: 1 });
        voiture2.attr({ opacity: 1 });
        voiture3.attr({ opacity: 1 });
        voiture4.attr({ opacity: 1 });
        voiture5.attr({ opacity: 1 });
        voiture6.attr({ opacity: 1 });
        // modifier le texte du bouton
        bouton.innerText = "Masquer les Voitures";
    }
    // inverser l'état de la variable voituresVisibles
    voituresVisibles = !voituresVisibles;
}

// Fonction pour ajouter des éléments textes dans mon graphique
function ajoutInfos() {
    // si info est vrai alors ajouter les infos
    if (info){
        info2020 = graphique.text(180, 150, "14459").attr({
            fill: 'white',
            fontSize: '16px',
            textAnchor: 'start' // Aligne le texte au début
        });
        info2021 = graphique.text(205, 194, "26331").attr({
            fill: 'white',
            fontSize: '16px',
            textAnchor: 'start' // Aligne le texte au début
        });
        info2022 = graphique.text(240, 237, "37155").attr({
            fill: 'white',
            fontSize: '16px',
            textAnchor: 'start' // Aligne le texte au début
        });
        info2023 = graphique.text(265, 280, "53148").attr({
            fill: 'white',
            fontSize: '16px',
            textAnchor: 'start' // Aligne le texte au début
        });
        info2024 = graphique.text(285, 320, "57122").attr({
            fill: 'white',
            fontSize: '16px',
            textAnchor: 'start' // Aligne le texte au début
        });
        // changer le texte du bouton
        boutoninfo.innerText = "Enelever les informations";
    }
    // sinon enlever les infos ajouter
    else{
        info2020.remove();
        info2021.remove();
        info2022.remove();
        info2023.remove();
        info2024.remove();
        // changer le texte du bouton
        boutoninfo.innerText = "Afficher plus d'informations";
    }
    // inverser l'état de la variable info
    info= !info;
}
// fonction de callback pour récupérer les premiers éléments du DOM, mettre en place les abonnements, ...
// Chargement du fichier SVG
function setupListeners(){
        graphique = Snap("#graphique");
        svg = Snap.load("graphique1_version_web_2.svg", function ( loadedFragment ) {
            graphique.append( loadedFragment );
                                       
        // récupération de calque de mon graphique svg
        voiture1 = graphique.select("#voiture1");
        voiture2 = graphique.select('#voiture2');
        voiture3 = graphique.select('#voiture3');
        voiture4 = graphique.select('#voiture_x5F_4');
        voiture5 = graphique.select('#voiture5');
        voiture6 = graphique.select('#voiture6');
        titre = graphique.select("#titre");
        boutoninfo=document.getElementById("nb_voitures");
        // appel des fonctions au hover de l'élément
        voiture1.hover(grossir, initiale);
        voiture2.hover(grossir, initiale);
        voiture3.hover(grossir, initiale);
        voiture4.hover(grossir, initiale);
        voiture5.hover(grossir, initiale);
        voiture6.hover(grossir, initiale);

        // Positionner les voitures par défault à un certain point
        positionnerVoitures();
        // appel de la fonction au click sur le graphique
        graphique.click(voituresDeplacement);

        // Démarre l'effet de vague sur le titre
        effetVague();
        // appel de fonctions à certains événements sur différents éléments
        bouton.addEventListener('click', masquerVoitures);
        window.addEventListener('scroll',positionnerVoitures);
        boutoninfo.addEventListener('click', ajoutInfos);

        grosTitre = document.querySelector(".title");
    mots = grosTitre.innerText.split(" "); // Diviser le texte en mots
    grosTitre.innerHTML = ""; // Vider le contenu initial

    // Animation librairie gsap
    // Créer un span pour chaque mot et l'ajouter au titre
    mots.forEach((mots, index) => {
        span = document.createElement("span");
        span.innerText = mots + " "; // Ajouter un espace après chaque mot
        grosTitre.appendChild(span);
            
        // Animer chaque mot avec un délai basé sur son index
        gsap.fromTo(span, 
            { opacity: 0, y: 20 }, // Commence invisible et en bas
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                delay: index * 0.3, // Délai d'animation
                ease: "power3.out"
            });
    });
    
    gsap.fromTo(".animation-image", 
        { scaleX: 0, opacity: 0 }, 
        { scaleX: 1, opacity: 1, duration: 3, ease: "power3.out" }
    );

    document.addEventListener("mousemove", (i) => {
        // Obtenir la position de la souris
        x = i.clientX;
        y = i.clientY;

        // Animer l'élément qui suit la souris
        gsap.to(".rond_souris", {
            x: x - 25, 
            y: y - 25, 
            ease: "power2.out" 
        });
    });
    }
)};

 // quand le DOM a été entièrement chargé, on peut appeler la fonction d'initialisation
window.addEventListener("load", setupListeners);