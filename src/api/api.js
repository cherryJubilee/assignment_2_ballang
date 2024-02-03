import productsDetailAPI from "./products/productdetail.api";
import productsAPI from "./products/products.api";

const api = {
  products: productsAPI,
  productDetail: productsDetailAPI,
};

export default api;
