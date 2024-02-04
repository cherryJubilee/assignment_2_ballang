import React, { useState } from "react";
import styles from "./ProductListItem.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";
import { useAuth } from "../../contexts/auth.context";

function ProductsListItem({ product }) {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const formattedPrice = product.price.toLocaleString("ko-KR") + "원";
  // 장바구니 추가
  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    } else {
      dispatch(addToCart({ product, quantity: 1 }));
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
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

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>장바구니에 담았습니다.</p>
            <div className={styles.btns}>
              <button onClick={closeModal}>쇼핑 계속하기</button>
              <Link to="/cart">
                <button onClick={closeModal}>장바구니 가기</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsListItem;
