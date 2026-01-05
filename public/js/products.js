//Array of products
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        description: "This is the first product",
        image: "product1.jpg"
    },
    {
        id: 2,
        name: "Product 2",
        price: 200,
        description: "This is the second product",
        image: "product2.jpg"
    },
    {
        id: 3,
        name: "Product 3",
        price: 300,
        description: "This is the third product",
        image: "product3.jpg"
    }
];

const productsContainer = document.getElementById('products');

//Function to display products
function displayProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <img src="img/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        `;
        productsContainer.appendChild(productCard);
    });
}

//Initial display of products
displayProducts();

// //Event listener for add to cart buttons
// productsContainer.addEventListener('click', (e) => {
//     if (e.target.classList.contains('add-to-cart')) {
//         const productId = e.target.dataset.id;
//         console.log(productId);
//     }
// });

// //Function to add product to cart
// function addToCart(productId) {
//     console.log(`Added ${productId} to cart`);
// }