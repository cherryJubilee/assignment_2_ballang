import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";
import ShortenHeader from "../../components/ShortenHeader";

function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <ShortenHeader />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
