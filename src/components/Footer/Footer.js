import React from "react";
import Styles from "./Footer.module.scss";

function Footer() {
  return (
    <div class={Styles.wrapper}>
      <section class={Styles.content}>
        <div>
          <ul class={Styles.menu}>
            <li>
              <a href="http://balaanofficial.com">회사소개</a>
            </li>
            <li>
              <a href="/">제휴문의</a>
            </li>
            <li>
              <a href="/">고객센터</a>
            </li>
            <li>
              <a href="/">이용약관</a>
            </li>
            <li>
              <a href="/">개인정보처리방침</a>
            </li>
          </ul>
          <div class={Styles.footArea}>
            <ul>
              <li>주식회사 발란</li>
              <li>대표: 최형록</li>
              <li>사업자 등록번호 815-88-00093</li>
              <li>통신판매업신고 2015-서울강남-01677</li>
              <li>채무지급보증안내</li>
            </ul>
            <ul>
              <li>서울특별시 강남구 역삼동 테헤란로 217, 10층</li>
            </ul>

            <a href="/">
              <img
                src="https://i.balaan.io/event/images/4ad804c4ec1688157eeec37bb905c8e3.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div class={Styles.contentRight}>
          <ul class={Styles.navList}>
            <li>MY ORDER</li>
            <li>
              <a href="/cart">주문내역</a>
            </li>
            <li>
              <a href="/">쇼핑백</a>
            </li>
          </ul>
          <ul class={Styles.navList}>
            <li> CUSTOMER SERVICE</li>
            <li>
              <a href="/t">발란머니 내역</a>
            </li>
            <li>
              <a href="/">쿠폰 내역</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
