document.addEventListener('DOMContentLoaded', function() {
    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Elements for displaying order list and total
    const orderList = document.getElementById('order-list');
    const totalElement = document.getElementById('total');

    // Function to render the cart items and calculate the total
    function renderOrderSummary() {
        let total = 0;
        orderList.innerHTML = ''; // Clear the previous list

        // Check if the cart is empty
        if (cart.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Your cart is empty.';
            orderList.appendChild(li);
            totalElement.textContent = '0.00';
            return;
        }

        // Render each item in the cart
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price_inr}`;
            orderList.appendChild(li);
            total += parseFloat(item.price_inr); // Add the price to the total
        });

        // Display the total
        totalElement.textContent = total.toFixed(2);
    }

    // Call the render function to display items and total
    renderOrderSummary();

    // Handle form submission
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.getElementById('payment').value;
        const totalAmount = totalElement.textContent;
        
        // Display a confirmation message
        alert(`
            Thank you for your order, ${name}!
            Total: ₹${totalAmount}
            Payment Method: ${paymentMethod}
            We will send the details to ${email}.
            Shipping to: ${address}
        `);
        window.location.href="index.html";
        // Clear cart data from localStorage after successful checkout
        localStorage.removeItem('cart');
        
        // Optionally, redirect to a "Thank You" page or the homepage
        // window.location.href = 'thankyou.html'; // Redirect to a Thank You page or index.html
    });
});