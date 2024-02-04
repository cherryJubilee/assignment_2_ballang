import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function Header() {
  const { isLoggedIn, logOut, username } = useAuth();
  return (
    <header>
      <section className={styles.topHeader}>
        <span>럭셔리 쇼핑이 참 쉽다, 발랑</span>
        <span>Online luxury boutique</span>
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <span>안녕하세요 .{username}님</span>
                </li>
                <li>
                  <span onClick={logOut}>로그아웃</span>
                </li>
              </>
            ) : (
              <li>
                <span>
                  <Link to="/sign-in">로그인</Link>
                </span>
              </li>
            )}
            <li>
              <span>
                <Link to="/my-page">마이페이지</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="/cart">장바구니</Link>
              </span>
            </li>
          </ul>
        </nav>
      </section>
      <section className={styles.middleHeader}>
        <div className={styles.gender}>
          <span>WOMAN</span>
          <span>|</span>
          <span>MAN</span>
        </div>
        <div className={styles.logo}>
          <Link to="/">
            <span>BALLANG</span>
          </Link>
        </div>
        <div className={styles.add}>
          <div className={styles.search}></div>
        </div>
      </section>

      <section className={styles.downHeader}>
        <a href="/">NEW IN</a>
        <a href="/">의류</a>
        <a href="/">슈즈</a>
        <a href="/">가방</a>
        <a href="/">액세서리</a>
        <a href="/">주얼리</a>
        <a href="/">SALE</a>
        <a href="/">DESIGNERS</a>
      </section>
    </header>
  );
}

export default Header;
