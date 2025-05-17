import {
    phones
} from './datasource.js';

var buttonNext = document.getElementById("iconNext")
var buttonPrev = document.getElementById("iconBack")
var length = phones.data.length
var currentCarousel = 0;

// Initial State
document.addEventListener("DOMContentLoaded", () => {

    // Display Static Data
    setCarouselState()
    setProductsState()

    // Toggle Sticky Header ( Navbar )
    window.addEventListener(`scroll`, function () {
        var header = document.querySelector(".header")
        header.classList.toggle('sticky', window.scrollY > 0);
    })

    // Toggle Hamburger
    var hamburger = document.querySelector(".hamburger")
    hamburger.addEventListener(`click`, () => {
        var navbar = document.querySelector(".navbar")
        navbar.classList.toggle("active")
        hamburger.classList.toggle("active")
    })

})

buttonNext.addEventListener("click", (event) => {
    event.preventDefault()
    carouselNext()
})
buttonPrev.addEventListener("click", (event) => {
    event.preventDefault()
    carouselPrev()
})

function setProductsState() {
    var products = document.getElementById("cp")
    var sizeOfProducts = length

    for (let index = 0; index < sizeOfProducts; index++) {
        const element = phones.data[index]
        const contentProducts = document.createElement(`cp-wrapper`)
        contentProducts.innerHTML = `
            <div class="item-cp">
                <img src="${element.image2}" alt="">
                <h1 id="title-products">${element.name}</h1>
                <h4 id="subtitle-products">${element.subtitle}</h4>
            </div>
        `
        products.appendChild(contentProducts)
    }
}

function setCarouselState() {
    var heroTitle = document.getElementById("hero-title")
    var heroPicture = document.getElementById("hero-picture")

    heroTitle.style.letterSpacing = "1px"
    heroPicture.style.opacity = "0";
    heroTitle.style.opacity = "0";

    setTimeout(() => {
        heroTitle.style.letterSpacing = "30px"
        heroPicture.style.opacity = "1";
        heroTitle.style.opacity = "1";

        heroTitle.innerHTML = phones.data[currentCarousel].name
        heroPicture.src = phones.data[currentCarousel].image
    }, "1000")
}

function carouselNext() {
    if (currentCarousel == length) { currentCarousel = 0 } else { currentCarousel++ }

    setCarouselState()
}

function carouselPrev() {
    if (currentCarousel == 0) { currentCarousel = 1 } else { currentCarousel-- }

    setCarouselState()
}