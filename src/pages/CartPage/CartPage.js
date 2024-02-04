import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartPage.module.scss";
import { removeFromCart, updateQuantity } from "../../store/reducers/cartSlice";
import { Link } from "react-router-dom";
import QuantitySelector from "../../components/QuantitySelector";

function CartPage() {
  const formattedPrices = useSelector((state) => state.cart.formattedPrices);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState({});
  const [totalProductPrice, setTotalProductPrice] = useState(0);
  const [totalPaymentPrice, setTotalPaymentPrice] = useState(0);

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };
  const handleQuantityUpdate = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckboxChange = (id, isChecked) => {
    setSelectedItems({ ...selectedItems, [id]: isChecked });
  };

  useEffect(() => {
    let newTotalProductPrice = 0;
    let newTotalPaymentPrice = 0;

    Object.entries(selectedItems).forEach(([id, isChecked]) => {
      if (isChecked) {
        const item = cartItems.find((item) => item.id === id);
        if (item) {
          newTotalProductPrice += item.goods_consumer * item.quantity;
          newTotalPaymentPrice += item.standard_price * item.quantity;
        }
      }
    });

    setTotalProductPrice(newTotalProductPrice);
    setTotalPaymentPrice(newTotalPaymentPrice);
  }, [selectedItems, cartItems]);

  return (
    <div className={styles.wrapper}>
      <section className={styles.products}>
        <header className={styles.title}>
          <h2>장바구니</h2>
        </header>

        <div className={styles.cartListWrapper}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.product}>
              <input
                type="checkbox"
                className="product-checkbox"
                onChange={(e) =>
                  handleCheckboxChange(item.id, e.target.checked)
                }
              />

              <div className={styles.productImg}>
                <img src={item.img_i} alt={item.goodsnm} />
              </div>

              <div className={styles.productDetails}>
                <div className={styles.productInfo}>
                  <div className={styles.itemName}>
                    <span>{item.brand.name}</span>
                    <Link to={`/products/${item.id}`}>{item.goodsnm}</Link>
                  </div>

                  <QuantitySelector
                    quantity={item.quantity}
                    setQuantity={(newQuantity) =>
                      handleQuantityUpdate(item.id, newQuantity)
                    }
                  />
                </div>

                <div>옵션: {item.option}</div>

                <div className={styles.productActions}>
                  <div className={styles.btnArea}>
                    <button onClick={() => handleRemove(item.id)}>
                      상품삭제
                    </button>
                    <span>|</span>
                    <button>바로주문</button>
                  </div>
                  <div className={styles.optionPrice}>
                    {formattedPrices[item.id] ||
                      `${(item.price * item.quantity).toLocaleString(
                        "ko-KR"
                      )}원`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.prices}>
        <div>
          <h3>총 상품금액</h3>
          <div className={styles.price}>
            {totalProductPrice.toLocaleString("ko-KR")}원
          </div>
        </div>
        <div>
          <h3>배송비</h3>
          <div className={styles.price}>0원</div>
        </div>
        <div>
          <h3>결제금액</h3>
          <div className={styles.priceTotal}>
            {totalPaymentPrice.toLocaleString("ko-KR")}원
          </div>
        </div>
        <button className={styles.btn}>선택 상품 구매하기</button>
      </section>
    </div>
  );
}

export default CartPage;
