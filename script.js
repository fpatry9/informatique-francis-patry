const header = document.querySelector("header");

let dernierScroll = 0;

window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset;

    if (scroll > dernierScroll && scroll > 100) {
        // Descend : cacher le header
        header.style.transform = "translateY(-100%)";
    } else {
        // Remonte : afficher le header
        header.style.transform = "translateY(0)";
    }

    dernierScroll = scroll;
});
