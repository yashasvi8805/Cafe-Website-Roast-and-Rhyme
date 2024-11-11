// Get references to important elements
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const closeCartButton = document.getElementById('close-cart');

let cart = [];

// Function to update the cart count and total in INR
function updateCart() {
  cartCount.textContent = cart.length;
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price_inr), 0);
  cartTotal.textContent = total.toFixed(2);
}

// Function to open the cart modal
function openCart() {
  cartModal.style.display = 'flex';
  cartItemsList.innerHTML = ''; // Clear the current items

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price_inr}`;
    cartItemsList.appendChild(li);
  });
}

// Function to add an item to the cart
function addToCart(event) {
  const button = event.target;
  const name = button.getAttribute('data-name');
  const price_inr = button.getAttribute('data-price-inr');

  cart.push({ name, price_inr });
  updateCart();
}

// Function to close the cart modal
function closeCart() {
  cartModal.style.display = 'none';
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', addToCart);
});

// Open cart modal when cart button is clicked
cartButton.addEventListener('click', openCart);

// Close the cart modal when close button is clicked
closeCartButton.addEventListener('click', closeCart);

// When checkout button is clicked, store cart in localStorage and redirect
checkoutButton.addEventListener('click', () => {
  // Store cart data in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Redirect to checkout page
  window.location.href = 'checkout.html';  // Redirecting to checkout page
});