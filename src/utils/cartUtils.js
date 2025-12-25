// Get cart items from localStorage
export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// Add product to cart
export const addToCart = (product) => {
  const cart = getCart();
  // Check if product already in cart
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove product from cart
export const removeFromCart = (id) => {
  let cart = getCart();
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Update product quantity
export const updateQuantity = (id, qty) => {
  const cart = getCart();
  const product = cart.find(item => item.id === id);
  if (product) {
    product.quantity = qty;
    if (product.quantity <= 0) {
      // remove if quantity 0
      removeFromCart(id);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};
