import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.scss";

function DefaultLayout() {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
