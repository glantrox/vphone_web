var buttonNext = document.getElementById("iconNext")
var buttonPrev = document.getElementById("iconBack")


var phones = {
    data: [
        {
            name: "STRAUSS ONE",
            image: "assets/images/hand_strauss_one.svg"
        },
        {
            name: "STRAUSS 2",
            image: "assets/images/hand_strauss_2.svg"
        },
        {
            name: "STRAUSS TRI",
            image: "assets/images/hand_strauss_one.svg"
        }
    ]
}
var length = phones.data.length

var currentCarousel = 0;
setAttributeState()

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

    heroTitle.innerHTML = phones.data[currentCarousel].name
    heroTitle.style.letterSpacing = "30px"
    heroPicture.src = phones.data[currentCarousel].image
}

function carouselNext() {
    if (currentCarousel == length) { currentCarousel = 0 } else { currentCarousel++ }
    setAttributeState()
}

function carouselPrev() {
    if (currentCarousel == 0) { currentCarousel = 1 } else { currentCarousel-- }
    setAttributeState()
}