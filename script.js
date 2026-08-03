window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo-principal");

    if (window.scrollY > 100) {
        logo.style.opacity = "0";
logo.style.transform = "scale(0)";
        logo.style.transition = "0.4s";
    } else {
        logo.style.opacity = "1";
logo.style.transform = "scale(1)";
        logo.style.transition = "0.4s";
    }
});
