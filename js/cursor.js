const cursor = document.querySelector(".cursor");
const paragraphs = document.querySelectorAll("p")
const headings = document.querySelectorAll("h2")
const headingOne = document.querySelectorAll("h1")
const links = document.querySelectorAll("a")
const images = document.querySelectorAll(".imageSlider__image")

document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
})

let pixels = 40

document.addEventListener("click", () => {
    pixels++
    cursor.style.width = pixels + "px"
    cursor.style.height = pixels + "px"
})

paragraphs.forEach(link => {
    link.addEventListener("mousemove", () => {
        gsap.to(cursor, 0.5, {width: "70", height: "70"})
    })
})

paragraphs.forEach(link => {
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, 0.5, {width: "30", height: "30"})
    })
})

headings.forEach(link => {
    link.addEventListener("mousemove", () => {
        gsap.to(cursor, 0.5, {width: "100", height: "100"})
    })
})

headings.forEach(link => {
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, 0.5, {width: "30", height: "30"})
    })
})

headingOne.forEach(link => {
    link.addEventListener("mousemove", () => {
        gsap.to(cursor, 0.5, {width: "300", height: "300"})
    })
})

headingOne.forEach(link => {
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, 0.5, {width: "30", height: "30"})
    })
})

links.forEach(link => {
    link.addEventListener("mousemove", () => {
        gsap.to(cursor, 0.5, {width: "80", height: "80"})
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, 0.5, {width: "30", height: "30"})
    })
})

images.forEach(link => {
    link.addEventListener("mousemove", () => {
        gsap.to(cursor, 0.5, {width: "80", height: "80", background: "red", zIndex: "1000000000"})
    })
})

images.forEach(link => {
    link.addEventListener("mouseleave", () => {
        gsap.to(cursor, 0.5, {width: "30", height: "30", background: "rgba(0,0,0,0.15)"})
    })
})