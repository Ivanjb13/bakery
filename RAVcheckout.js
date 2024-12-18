const cart = JSON.parse(localStorage.getItem('cart')) || [];

function loadCheckout() {
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutTotal = document.getElementById('checkout-total');

    checkoutItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        checkoutItems.appendChild(listItem);
    });

    checkoutTotal.innerText = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Have a blessed day!');
    localStorage.removeItem('cart');
    window.location.href = 'RAVhome.html';
});

// Initialize checkout display on load
loadCheckout();