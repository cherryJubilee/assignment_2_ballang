import React from "react";
import styles from "./ProductListItem.module.scss";
import { Link } from "react-router-dom";

function ProductsListItem({ product }) {
  const formattedPrice = product.price.toLocaleString("ko-KR") + "원";

  return (
    <div className={styles.wrapper}>
      <Link to={`products/${product.id}`}>
        <img src={product.img_i} alt={product.goodsnm}></img>
      </Link>
      <h6>{product.brand.name}</h6>
      <h6>{product.goodsnm}</h6>
      <h6>{formattedPrice}</h6>
    </div>
  );
}

export default ProductsListItem;
