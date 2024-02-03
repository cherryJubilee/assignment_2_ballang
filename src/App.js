import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import MyPage from "./pages/MyPage";
import SignInPage from "./pages/SignInPage";
import CartPage from "./pages/CartPage";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
