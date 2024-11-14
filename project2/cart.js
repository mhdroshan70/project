// Update the total amount based on the quantity
function updateTotal() {
    const prices = document.querySelectorAll('.item-price');
    const quantities = document.querySelectorAll('.qty');
    let total = 0;

    prices.forEach((price, index) => {
        const itemTotal = parseFloat(price.textContent) * parseInt(quantities[index].textContent);
        total += itemTotal;
    });

    document.getElementById('order-value').textContent = total.toFixed(2);
    document.getElementById('total-amount').textContent = total.toFixed(2);
}

// Increase quantity
function increaseQty(button) {
    const qtyElement = button.previousElementSibling;
    let qty = parseInt(qtyElement.textContent);
    qtyElement.textContent = ++qty;
    updateTotal();
}

// Decrease quantity
function decreaseQty(button) {
    const qtyElement = button.nextElementSibling;
    let qty = parseInt(qtyElement.textContent);
    if (qty > 1) {
        qtyElement.textContent = --qty;
        updateTotal();
    }
}

// Remove item from cart
function removeItem(button) {
    const cartItem = button.closest('.cart-item');
    cartItem.remove();
    updateTotal();
}
