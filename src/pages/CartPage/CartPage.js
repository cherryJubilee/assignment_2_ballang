import React from "react";
import { useSelector } from "react-redux";
import styles from "./CartPage.module.scss"; // Update with your actual styles path

function CartPage() {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.cartPage}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.img_i}
                alt={item.goodsnm}
                className={styles.cartItemImage}
              />
              <div className={styles.itemDetails}>
                <div>{item.goodsnm}</div>
                <div>{item.brand.name}</div>
                <div>{`${item.price.toLocaleString("ko-KR")}원`}</div>
                <div>Quantity: {item.quantity}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
