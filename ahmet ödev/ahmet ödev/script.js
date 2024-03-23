let cart = [];

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');

  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price;
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - $${item.price}`;
    cartList.appendChild(listItem);
  });

  cartTotal.textContent = total;
}

// Temizleme butonunu bağla
const clearButton = document.getElementById('clear-cart');
if (clearButton) {
  clearButton.addEventListener('click', clearCart);
}
