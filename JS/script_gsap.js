// Variables globales
let grosTitre;
let mots; 
let span;
let x;
let y;

function setupListeners(){
    grosTitre = document.querySelector(".title");
    mots = grosTitre.innerText.split(" "); // Diviser le texte en mots
    grosTitre.innerHTML = ""; // Vider le contenu initial

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

    document.addEventListener("mousemove", (e) => {
        // Obtenir la position de la souris
        x = e.clientX;
        y = e.clientY;

        // Animer l'élément qui suit la souris
        gsap.to(".rond_souris", {
            x: x - 25, 
            y: y - 25, 
            ease: "power2.out" 
        });
    });
}

 // quand le DOM a été entièrement chargé, on peut appeler la fonction d'initialisation
 window.addEventListener("load", setupListeners);