const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
        header.style.transform = "translateY(-100%)";
    } else if (window.scrollY < 20) {
        header.style.transform = "translateY(0)";
    }
});
