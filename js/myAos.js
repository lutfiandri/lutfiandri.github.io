const heroIntro = document.querySelector(".hero .intro");
heroIntro.dataset.aos = "fade";
heroIntro.dataset.aosDuration = "1000";
heroIntro.dataset.aosDelay = "500";
heroIntro.dataset.aosOnce = "true";

const heroName = document.querySelector(".hero .name");
heroName.dataset.aos = "fade";
heroName.dataset.aosDuration = "1000";
heroName.dataset.aosDelay = "2000";
heroIntro.dataset.aosOnce = "true";

const lines = document.querySelectorAll(".line");
lines.forEach((line) => {
    line.dataset.aos = "fade-up";
});

const texts = document.querySelectorAll(".text");
texts.forEach((text) => {
    text.dataset.aos = "fade-up";
    text.dataset.aosDelay = "300";
});

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.dataset.aos = "fade-up";
    box.dataset.aosDelay = "500";
});

// const footerBoxes = document.querySelectorAll("footer .box");
// boxes.forEach((box) => {
//     box.dataset.aos = "fade-up";
//     box.dataset.aosAnchorPlacement = "bottom-bottom";
// });

AOS.init({
    // once: true,
    anchorPlacement: "top-center",
    duration: 800,
});
