const nav = document.querySelector("nav")
const navCover = document.querySelector("#navCover")
const mobMenuBtn = document.querySelector(".mobMenuBtn button")
const navLinks = document.querySelectorAll("nav .links ul li")
const closeNav = document.querySelector("nav .links #closeMobNav")


// const closeNavBtns = Array.from(navLinks)
const closeNavBtns = [navCover, closeNav]


mobMenuBtn.addEventListener('click', () => {
    nav.classList.add("mobNavActive")
})

closeNavBtns.map(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("mobNavActive")
    })
})

window.addEventListener('scroll', (e) => {
    if (scrollY > 100) nav.classList.add('scrolled')
    else  nav.classList.remove('scrolled')
})