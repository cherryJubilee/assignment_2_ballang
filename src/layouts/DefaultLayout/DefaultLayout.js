import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./DefaultLayout.module.scss";
import Footer from "../../components/Footer";

function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
