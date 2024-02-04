import React from "react";
import styles from "./QuantitySelector.module.scss";

function QuantitySelector({ quantity, setQuantity }) {
  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  return (
    <div className={styles.quantityBox}>
      <button onClick={() => handleQuantityChange(quantity - 1)}>
        <img src="/minus.png" alt="수량 감소" />
      </button>
      <input type="text" value={quantity} title="구매수량" />
      <button onClick={() => handleQuantityChange(quantity + 1)}>
        <img src="/plus.png" alt="수량 증가" />
      </button>
    </div>
  );
}

export default QuantitySelector;
