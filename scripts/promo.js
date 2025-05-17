import {
    phones
} from './datasource.js';

document.addEventListener("DOMContentLoaded", () => {
    renderDiscountedProducts()
})

function renderDiscountedProducts() {
    const container = document.querySelector('.footer-cpr');
    const discountedProducts = getDiscountedProducts();

    discountedProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'item-cpr';

        item.innerHTML = `
            <a href="/product.html?code=${product.code}" style="text-decoration: none; color: inherit; text-align:center;">
                <img src="${product.image2}" alt="">
                <h1>${product.name}</h1>
                <h4>${product.discount} OFF</h4>
            </a>
        `;

        container.appendChild(item);
    });
}

function getDiscountedProducts() {
    return phones.data.filter(product => product.discount != null);
}
