window.addEventListener("scroll", function () {
    const logo = document.querySelector(".logo-principal");
    const header = document.querySelector("header");

    if (window.scrollY > 100) {
        logo.style.opacity = "0";
        logo.style.maxHeight = "0";
        logo.style.margin = "0";
        logo.style.transition = "all 0.4s ease";

        header.style.paddingTop = "10px";
        header.style.paddingBottom = "10px";
    } else {
        logo.style.opacity = "1";
        logo.style.maxHeight = "450px";
        logo.style.margin = "15px auto";
        logo.style.transition = "all 0.4s ease";

        header.style.paddingTop = "";
        header.style.paddingBottom = "";
    }
});
