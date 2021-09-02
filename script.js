//buttons
const left = document.getElementById("hero-left")
const right = document.getElementById("hero-right")

//carousel
const carousel = document.getElementById("carousel")
const carouselImages = document.querySelectorAll("#carousel > img")

//artivle
const title = document.getElementById("article-title")
const content = document.getElementById("article-content")


let counter = 1
let size = carouselImages[0].clientWidth

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'

//articles
let articleTitle = `Discover innovative ways to decorate`
let articleContent = `We provide unmatched quality, comfort, and style for property owners across the country.
Our experts combine form and function in bringing your vision to life. Create a room in your
own style with our collection and make your property a reflection of you and what you love.`

function setArticle(counter) {
    switch (counter) {
        case 4:
            articleTitle = `Discover innovative ways to decorate`
            articleContent = `We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.`
            break;
        case 1:
            articleTitle = `Discover innovative ways to decorate`
            articleContent = `We provide unmatched quality, comfort, and style for property owners across the country.
            Our experts combine form and function in bringing your vision to life. Create a room in your
            own style with our collection and make your property a reflection of you and what you love.`
            break;
        case 2:
            articleTitle = `We are available all across the globe`
            articleContent = `With stores all over the world, it's easy for you to find furniture for your home or place of business.
            Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.`
            break;
        case 3:
            articleTitle = `Manufactured with the best materials`
            articleContent = `Our modern furniture store provide a high level of quality. Our company has invested in
            advanced technology
            to ensure that every product is made as perfect and as consistent as possible. With three decades of
            experience in this industry, we understand what customers want for their home and office.`
            break;
        case 0:
            articleTitle = `Manufactured with the best materials`
            articleContent = `Our modern furniture store provide a high level of quality. Our company has invested in
            advanced technology
            to ensure that every product is made as perfect and as consistent as possible. With three decades of
            experience in this industry, we understand what customers want for their home and office.`
            break;
    }
}

//button listener
right.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return
    carousel.style.transition = "transform .2s ease-in-out"
    counter++
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'

    setArticle(counter)

    //insert article
    title.innerHTML = articleTitle
    content.innerHTML = articleContent

})

left.addEventListener('click', () => {
    if (counter <= 0) return
    carousel.style.transition = "transform .2s ease-in-out"
    counter--
    carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'

    setArticle(counter)

    //insert article
    title.innerHTML = articleTitle
    content.innerHTML = articleContent
})

//looping the carousel
carousel.addEventListener('transitionend', () => {

    if (carouselImages[counter].id === 'clone-last') {
        carousel.style.transition = "none"
        counter = carouselImages.length - 2
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (carouselImages[counter].id === 'clone-first') {
        carousel.style.transition = "none"
        counter = carouselImages.length - counter
        carousel.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})



//nav-list
const navList = document.querySelector("nav>.nav-list")


//nav toggler
const hamburger = document.querySelector(".toggler>.hamburger")
const closeNav = document.querySelector(".toggler>.close")


console.log(hamburger)
hamburger.addEventListener('click', () => {
    navList.style.transform = "translateX(0)"
    hamburger.style.display = "none"
    setTimeout(() => { closeNav.style.display = "block" }, 200)

})
closeNav.addEventListener('click', () => {
    navList.style.transform = "translateX(100%)"
    closeNav.style.display = "none"
    hamburger.style.display = "block"

})