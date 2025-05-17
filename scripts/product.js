import {
    phones
} from './datasource.js';

const urlString = window.location.search;
const urlParams = new URLSearchParams(urlString);
const paramValue = urlParams.get('code');

document.addEventListener("DOMContentLoaded", () => {
    var detail = getProductDetail(paramValue)
    displayDetail(detail)
})

// Display Detail
function displayDetail(detail) {
    // buat title
    document.querySelector('title').textContent = detail.name

    // foto yg atas dan lain lain lah CAPEK
    document.getElementById('image').src = detail.image2
    document.getElementById('title').innerText = detail.name
    document.getElementById('subtitle').innerHTML = detail.subtitle

    // Gataulah
    document.getElementById("spec").style.backgroundColor = detail.themeColor
    setBackgroundOpacity("price-buy", detail.themeColor, 0.5)

    // Display Specs
    displaySpecs(detail.description)

    // Display Harga dan Diskon
    document.getElementById(`harga`).innerHTML = detail.price
    if (detail.discount != null) {
        document.getElementById(`diskon`).innerHTML = `Dapatkan diskon sebanyak ` + detail.discount
    }

    // Display Strong Descriptioantsoiandoais
    document.getElementById('s-desc').innerHTML = detail.strongDescription
}

function displaySpecs(listOfSpecs) {
    var listView = document.getElementById("spec")
    listOfSpecs.forEach(element => {
        var itemSpecs = document.createElement("item-spec")
        itemSpecs.innerHTML = `<p>${element}</p>`
        listView.appendChild(itemSpecs)
    });
}

// Get Product Detail
function getProductDetail(id) {
    return phones.data.find((item) => item.code === id);
}


function setBackgroundOpacity(elementId, hexColor, opacity) {
    if (hexColor.startsWith("#")) hexColor = hexColor.slice(1);

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);
    document.getElementById(elementId).style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;
}