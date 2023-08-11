const apiUrl = 'https://fakestoreapi.com/products';

axios.get(apiUrl).then(response => {
    const products = response.data;
    const cardContainer = document.querySelector('.card-container');
    for(i = 0; i < 4; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const product = products[i];

        card.innerHTML = `
        <img src=${product.image}>
        <p class="description">${product.title}</p>
        <p class="price">Price:${product.price}</p>
        `;

        cardContainer.appendChild(card);
    }
})