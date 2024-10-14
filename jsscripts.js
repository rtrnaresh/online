// js/scripts.js
function addToCart() {
    alert("Product added to cart!");
}

function proceedToCheckout() {
    window.location.href = 'payment.html';
}

function validatePaymentForm() {
    const cardNumber = document.getElementById("cardNumber").value;
    if (cardNumber.length < 16) {
        alert("Please enter a valid card number.");
        return false;
    }
    alert("Payment processed successfully!");
    window.location.href = 'confirmation.html';
    return false; // Prevent form submission for demo
}
