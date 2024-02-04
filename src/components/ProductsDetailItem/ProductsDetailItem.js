import React, { useState } from "react";
import styles from "./ProductsDetailItem.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";
import { formatPrice } from "../../utils/util";
import QuantitySelector from "../../components/QuantitySelector";

function ProductDetailItem({ product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity || 1);
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);

  // 상품금액
  const formattedCustomerPrice = formatPrice(product.goods_consumer);
  // 판매가
  const formattedStandardPrice = formatPrice(product.standard_price);
  // 최대혜택가
  const rawPrice = product.goods_price;
  const formattedPrice = formatPrice(product.goods_price);
  // 적립금 계산
  const reward = Math.floor((rawPrice / 100) * 0.01) * 100;
  const formattedReward = formatPrice(reward);
  // 도착 날짜 계산
  const today = new Date();
  const arrivalDate = new Date(today.setDate(today.getDate() + 5));
  const options = { month: "2-digit", day: "2-digit", weekday: "short" };
  const formattedDate = arrivalDate.toLocaleDateString("ko-KR", options);
  // 할인율 계산
  const discountRate = Math.round(
    (1 - product.goods_price / product.goods_consumer) * 100
  );

  const handleQuantityUpdate = (newQuantity) => {
    setQuantity(newQuantity);
  };

  // 장바구니 추가
  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("옵션을 선택해주세요.");
      return;
    } else {
      dispatch(addToCart({ product, quantity, option: selectedOption }));
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.totalInfo}>
        <div className={styles.img}>
          <img src={product.img_i} alt={product.goodsnm} />
        </div>

        <div className={styles.infoContent}>
          <div className={styles.infoHeader}>
            <h2 className={styles.brand}>{product.brand.name}</h2>
            <span>{product.goodsnm}</span>
            <span>| 발란코드 [{product.id}]</span>
          </div>

          <div className={styles.infoList}>
            <div>
              <span>상품 금액</span>
              <p>{formattedCustomerPrice}</p>
            </div>
            <div>
              <span>판매가</span>
              <p>{formattedStandardPrice}</p>
            </div>
            <div className={styles.flexContainer}>
              <span className={styles.container}>최대혜택가</span>
              <p>{formattedPrice}</p>
              <span className={styles.discountRate}>{discountRate}%</span>
            </div>
            <div>
              <span>적립금</span>
              <p>{formattedReward}</p>
            </div>
            <div>
              <span>무이자할부</span>
              <p>12개월</p>
            </div>
            <div>
              <span>배송비</span>
              <p>무료</p>
            </div>
            <div>
              <span>도착예정</span>
              <p>{formattedDate} 도착예정</p>
            </div>
          </div>

          <div className={styles.cartInput}>
            <div>
              <h4>옵션선택</h4>
            </div>
            <select
              className={styles.optionList}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option>옵션 (옵션명)</option>
              {product.option.map((option, index) => (
                <option key={index} value={option.size}>
                  {option.size}
                </option>
              ))}
            </select>

            <section className={styles.qtyWrapper}>
              <h4>구매수량</h4>
              <div className={styles.quantityBox}>
                <QuantitySelector
                  quantity={quantity}
                  setQuantity={handleQuantityUpdate}
                />
              </div>
            </section>

            <div className={styles.buyBtn}>
              <button>BUY NOW</button>
              <button onClick={handleAddToCart}>
                <img src="/bag.png" alt="cart"></img>
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
      </section>

      <section className={styles.detailInfo}>
        <h2 className={styles.header}>상세정보</h2>
        <table className={styles.productTable}>
          <tbody>
            <tr>
              <th>브랜드</th>
              <td>
                {product.brand.name}
                <a href={product.brand.link}>[바로가기]</a>
              </td>
            </tr>
            <tr>
              <th>상품명</th>
              <td>{product.goodsnm}</td>
            </tr>
            <tr>
              <th>발란코드</th>
              <td>{product.id} (상품 문의 시, 꼭 알려주세요!)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default ProductDetailItem;
