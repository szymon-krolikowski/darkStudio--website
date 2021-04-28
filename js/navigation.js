const toggleButton = document.querySelector(".navigationBar__button");

let t1 = gsap.timeline()

const linku = () => {
    t1.staggerFromTo(".navigationMobile__link", 1, 
    {x:-100, opacity: 0, ease:"power2.out"}, 
    {x: 0, opacity: 1}, 0.3)
};

const showMobileMenu = () => {
    t1.addLabel("start")
      .to(".navigationMobile", 1.5, {top: "0", ease:"power2.out"}, "start")
      .to(".navigationBar__spanOne", {background: "white", zIndex: 100000, rotation: 45}, "start")
      .to(".navigationBar__spanTwo", {background: "white", zIndex: 100000, rotation: -45, y:-7}, "start")
      .staggerFromTo(".navigationMobile__link", 1, {x:-100, opacity: 0, ease:"power2.out"}, 
       {x: 0, opacity: 1}, 0.3)
};

const closeMobileMenu = () => {
    t1.to(".navigationMobile", 1.5, {top: "-20%"})
      .to(".navigationBar__spanOne", {background: "black", zIndex: 100000, rotation: 0}, "-=1")
      .to(".navigationBar__spanTwo", {background: "black", zIndex: 100000, rotation: 0, y:0}, "-=1")
};

let flaga = true;

toggleButton.addEventListener("click", () => {
    if(flaga === true) {
        showMobileMenu()
        flaga = false
    } else {
        closeMobileMenu()
       flaga = true
    };
});