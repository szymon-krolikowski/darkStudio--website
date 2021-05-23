const startOverlay = document.querySelector(".startOverlay")
const startAnimationElements = document.querySelectorAll(".startAnimationElements")
const questionSection = document.querySelector(".question")
const partnersSection = document.querySelector(".partners__logoSection")
const darkArticleHeadings = document.querySelectorAll(".darkArticle__headingBox")
const darkArticleText = document.querySelectorAll(".darkArticle__textBox")

let tl = new TimelineMax();

gsap.set(startAnimationElements, {opacity: 0})


tl.to(startOverlay, 3, {height: 0}, )
  .to(startOverlay.children, 1, {opacity: 0}, "-=2")
  .staggerFromTo(".startAnimationElements", 0.5, {opacity: 0, y:20}, {opacity: 1, y:0}, 0.2)

gsap.fromTo(questionSection.children, 1,
   {y: "+=50", opacity: 0}, 
   {y:0, opacity: 1, stagger: 0.2, 
   scrollTrigger: {
      trigger: questionSection,
      start: "-30% center",
      markers: true
}});

// gsap.fromTo(partnersSection.children, 0.5,
//    {y: "+=50", opacity: 0},
//    {y:0, opacity: 1, stagger: 0.2,
//     scrollTrigger: {
//       trigger: ".partners", start: "-20% center"
// }});

darkArticleHeadings.forEach(section => {
  gsap.fromTo(section.children, 1,
    {y: "+=50", opacity: 0},
    {y:0, opacity: 1, 
    scrollTrigger: {
      trigger: section, start: "-100% center"
    }});
});

darkArticleText.forEach(section => {
  gsap.fromTo(section.children, 1,
    {y: "+=50", opacity: 0},
    {y:0, opacity: 1, stagger: 0.2, 
    scrollTrigger: {
      trigger: section, start: "-10% center",
    }});
});


