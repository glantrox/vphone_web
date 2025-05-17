import {
    phones
} from './datasource.js';

// Load Products Content
document.addEventListener("DOMContentLoaded", () => {
    setProductsState()
})

function setProductsState() {
    var listView = document.getElementById("cp")
    phones.data.forEach((item) => {
        const contentProducts = document.createElement(`cp-wrapper`)
        contentProducts.innerHTML = `
         <a href="/product.html?code=${item.code}" class="item-cp" style="background-color: ${item.themeColor};">
                <div class="itcp-text">
                    <h1>${item.name}</h1>
                    <h4>${item.subtitle}</h4>
                </div>
                <img src="${item.image2}" alt="">
            </a>
        `
        listView.appendChild(contentProducts)
    })
}