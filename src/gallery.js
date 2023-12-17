let navLinks = document.querySelectorAll(".carousel .nav-link");
let slides = document.querySelectorAll(".carousel .slides img");
let overlays = document.querySelectorAll(".carousel .bar");
let maxZIndex = navLinks.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";

let imgIndex = 1;
let conts = document.querySelectorAll(".carousel .slides .cont");

conts[0].classList.add("active");
navLinks[0].classList.add("active");



navLinks.forEach((navLink, indexActiveNav) => {
    overlays[indexActiveNav].style.zIndex = `${navLinks.length - indexActiveNav}`;
    navLink.addEventListener("click", () => {
        // nav-link
        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        navLink.classList.add("active");

        // slide
        let currentCont = document.querySelector(".cont.active");
        conts.forEach(slide => slide.classList.remove("active"));
        let contFadeOut = currentCont.animate(
            [
                {transform: "translateX(0)", opacity: 1},
                {transform: "translateX(5%)", opacity: 0}
            ],
            {
                duration: 600,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        contFadeOut.onfinish = () => {
            let activeCont = null;
            conts.forEach((cont, indexCont) => {
                if (indexCont === indexActiveNav) {
                    activeCont = cont;
                }
            })
            activeCont.classList.add("active");
            activeCont.animate(
                [
                    {transform: "translateX(-5%)", opacity: 0},
                    {transform: "translateX(0)", opacity: 1}
                ],
                {
                    duration: 600,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );
        };

        // overlay
        maxZIndex += 1;
        let activeOverlay = overlays[indexActiveNav];
        activeOverlay.style.zIndex = `${maxZIndex}`;
        activeOverlay.animate(
            [{transform: "scaleX(0)"}, {transform: "scaleX(1)"}],
            {duration: 1200, fill: "forwards", easing: easeInOutQuart}
        );
    });
});
