import React from "react";
import { Outlet } from "react-router-dom";
import ShortenHeader from "../../components/ShortenHeader";

function AuthLayout() {
  return (
    <div>
      <ShortenHeader />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
