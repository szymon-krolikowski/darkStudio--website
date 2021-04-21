const buttonMobileNavigation = document.querySelector(".navigationBar__button");
const navigationMobile = document.querySelector(".navigationMobile");
const logo = document.querySelector(".navigationBar__logo")
const buttonTopLine = document.querySelector(".navigationBar__buttonTopLine");
const buttonBotLine = document.querySelector(".navigationBar__buttonBotLine");
const lis = document.querySelectorAll(".lis");

buttonMobileNavigation.addEventListener("click", () => {
    
    buttonMobileNavigation.classList.toggle("active");
    
    if(buttonMobileNavigation.classList.contains("active")) {
        navigationMobile.classList.toggle("navigationMobileAnimation");
        logo.classList.toggle("navigationLogoAnimation");
        buttonTopLine.classList.toggle("navigationButtonAnimation");
        buttonBotLine.classList.toggle("navigationButtonAnimation");
    } else if(!buttonMobileNavigation.classList.contains("active")) {
        navigationMobile.classList.toggle("navigationMobileAnimationReverse");
        logo.classList.toggle("navigationLogoAnimationReverse");
        buttonTopLine.classList.toggle("navigationButtonAnimationReverse");
        buttonBotLine.classList.toggle("navigationButtonAnimationReverse");
    };
});