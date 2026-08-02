// ==========================================
// Informatique Francis Patry
// script.js v1.0
// ==========================================

// Message de bienvenue
window.addEventListener("load", () => {
    console.log("Bienvenue sur le site d'Informatique Francis Patry");
});

// Animation des cartes de services
const cartes = document.querySelectorAll(".service-card");

cartes.forEach((carte) => {

    carte.addEventListener("mouseenter", () => {
        carte.style.transform = "scale(1.05)";
        carte.style.transition = "0.3s";
    });

    carte.addEventListener("mouseleave", () => {
        carte.style.transform = "scale(1)";
    });

});

// Animation de la galerie
const images = document.querySelectorAll(".galerie img");

images.forEach((img) => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

// Message lors du clic sur le bouton Rendez-vous
const rendezVous = document.querySelector('a[href="#contact"]');

if (rendezVous) {

    rendezVous.addEventListener("click", () => {

        alert(
            "Merci de votre intérêt !\n\nPour le moment, les rendez-vous se prennent par téléphone au 819-463-0999."
        );

    });

}

// Affiche l'année automatiquement dans le footer
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " +
        new Date().getFullYear() +
        " Informatique Francis Patry<br>Votre expert en informatique à Gracefield";

}
