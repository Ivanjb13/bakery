let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} (x${item.quantity}) - $${item.price * item.quantity}`;
        cartItems.appendChild(listItem);
    });

    document.getElementById('cart-total').innerText = total.toFixed(2);

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Initialize cart display on load
updateCart();
