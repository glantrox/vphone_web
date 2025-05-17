import {
    phones
} from './datasource.js';

var buttonNext = document.getElementById("iconNext")
var buttonPrev = document.getElementById("iconBack")
var length = phones.data.length
var currentCarousel = 0;

// Initial State
document.addEventListener("DOMContentLoaded", () => {
    setAttributeState()

    window.addEventListener(`scroll`, function () {
        var header = document.querySelector(".header")
        header.classList.toggle('sticky', window.scrollY > 0);
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

function setAttributeState() {
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

    setAttributeState()
}

function carouselPrev() {
    if (currentCarousel == 0) { currentCarousel = 1 } else { currentCarousel-- }

    setAttributeState()
}