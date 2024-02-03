import React from "react";
import styles from "./ShortenHeader.module.scss";
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
    </header>
  );
}

export default Header;
