// Simple shopping cart functionality
let cart = [];
let cartCount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartCount++;
    updateCartCount();
}

function updateCartCount() {
    const cartLink = document.getElementById('cart');
    cartLink.textContent = `Cart (${cartCount})`;
}

// You can add more JavaScript for cart management and functionality
