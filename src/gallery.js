let navLinks = document.querySelectorAll(".carousel .nav-link");
let slides = document.querySelectorAll(".carousel .slides img");
let overlays = document.querySelectorAll(".carousel .bar");
let maxZIndex = navLinks.length;
let easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
slides[0].classList.add("active");
navLinks[0].classList.add("active");

let imgIndex = 1;
let conts = document.querySelectorAll(".carousel .slides .cont");


navLinks.forEach((navLink, indexActiveNav) => {
    overlays[indexActiveNav].style.zIndex = `${navLinks.length - indexActiveNav}`;
    navLink.addEventListener("click", () => {
        // nav-link
        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        });

        navLink.classList.add("active");

        // slide
        let currentSlide = document.querySelector(".carousel .slides img.active");
        slides.forEach(slide => slide.classList.remove("active"));
        let slideFadeOut = currentSlide.animate(
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

        slideFadeOut.onfinish = () => {
            let activeSlide = null;
            conts.forEach((cont, indexCont) => {
                if (indexCont === indexActiveNav) {
                    activeSlide = cont.children[0];
                }
            })
            activeSlide.classList.add("active");
            activeSlide.animate(
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
