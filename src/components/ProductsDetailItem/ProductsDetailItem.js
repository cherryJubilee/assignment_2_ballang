import React, { useState } from "react";
import styles from "./ProductsDetailItem.module.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/reducers/cartSlice";

function ProductDetailItem({ product }) {
  const dispatch = useDispatch();

  // 상품금액
  const formattedCustomerPrice =
    product.goods_consumer.toLocaleString("ko-KR") + "원";
  // 판매가
  const formattedStandardPrice =
    product.standard_price.toLocaleString("ko-KR") + "원";
  // 최대혜택가
  const rawPrice = product.goods_price;
  const formattedPrice = product.goods_price.toLocaleString("ko-KR") + "원";
  // 적립금 계산
  const reward = Math.floor((rawPrice / 100) * 0.01) * 100;
  const formattedReward = reward.toLocaleString("ko-KR") + "원";
  // 도착 날짜 계산
  const today = new Date();
  const arrivalDate = new Date(today.setDate(today.getDate() + 5));
  const options = { month: "2-digit", day: "2-digit", weekday: "short" };
  const formattedDate = arrivalDate.toLocaleDateString("ko-KR", options);
  // 할인율 계산
  const discountRate = Math.round(
    (1 - product.goods_price / product.goods_consumer) * 100
  );

  // -,+ 버튼 기능
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  // 장바구니 추가
  const handleAddToCartWithQuantity = (quantity) => {
    dispatch(addToCart({ product, quantity }));
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.totalInfo}>
        <div className={styles.img}>
          <img src={product.img_i} alt={product.goodsnm} />
        </div>

        <div className={styles.infoContent}>
          <div className={styles.infoHeader}>
            <h2>{product.brand.name}</h2>
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
            <select className={styles.optionList}>
              <option value="">옵션 (옵션명)</option>
              {product.option.map((option, index) => (
                <option key={index}>{option.size}</option>
              ))}
            </select>
            <section className={styles.qtyWrapper}>
              <h4>구매수량</h4>
              <div className={styles.quantityBox}>
                <button onClick={() => handleQuantityChange(quantity - 1)}>
                  <img src="/minus.png" alt="수량 감소" />
                </button>
                <input type="text" value={quantity} title="구매수량" />
                <button onClick={() => handleQuantityChange(quantity + 1)}>
                  <img src="/plus.png" alt="수량 증가" />
                </button>
              </div>
            </section>

            <div className={styles.buyBtn}>
              <button>BUY NOW</button>
              <button onClick={handleAddToCartWithQuantity}>
                <img src="/bag.png" alt="cart"></img>
              </button>
            </div>
          </div>
        </div>
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
