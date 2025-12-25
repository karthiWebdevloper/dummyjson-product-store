import { useState, useEffect } from "react";
import { getCart, removeFromCart, updateQuantity } from "../utils/cartUtils";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  const handleQuantityChange = (id, qty) => {
    updateQuantity(id, qty);
    setCartItems(getCart());
  };

  if (cartItems.length === 0) {
    return <h2 style={{ padding: "20px" }}>Cart is empty</h2>;
  }

  return (
    <div className="cartpage">
      <h2 className="carttitle">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cartitem">
          <h4 className="cartitemtitle">{item.title}</h4>
          <p className="cartitemprice">₹ {item.price * item.quantity}</p>
          <div>
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => handleRemove(item.id)} style={{ marginLeft: "10px", background: "red", color: "#fff" }}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;

