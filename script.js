// Get necessary elements
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const viewCartButton = document.getElementById('view-cart');

// Initialize cart
let cart = [];
let total = 0;

// Function to update the cart display
function updateCart() {
    cartItemsList.innerHTML = '';
    total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = item.name + ' - $' + item.price;
        cartItemsList.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Event listener for each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        const product = {
            name: productName,
            price: productPrice,
        };

        cart.push(product);
        updateCart();
    });
});

// Event listener for the "View Cart" button (you can define your own cart viewing mechanism)
viewCartButton.addEventListener('click', () => {
    // Implement your cart viewing logic here
});
