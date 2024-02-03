import React from "react";
import styles from "./ProductListItem.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";

function ProductsListItem({ product }) {
  const dispatch = useDispatch();

  const formattedPrice = product.price.toLocaleString("ko-KR") + "원";
  // 장바구니 추가
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.wrapper}>
      <Link to={`products/${product.id}`}>
        <img src={product.img_i} alt={product.goodsnm}></img>
      </Link>

      <div className={styles.productInfo}>
        <div className={styles.brand}>{product.brand.name}</div>
        <div className={styles.name}>{product.goodsnm}</div>
        <div className={styles.priceAndCart}>
          <div>{formattedPrice}</div>
          <div className={styles.cartImg}>
            <button onClick={() => handleAddToCart(product)}>
              <img src="/bag.png" alt="cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsListItem;
