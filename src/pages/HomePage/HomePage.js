import { useEffect, useState } from "react";
import api from "../../api/api";
import ProductsListItem from "../../components/ProductsListItem";
import styles from "./HonePage.module.scss";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .products()
      .then((data) => {
        if (data) {
          console.log("Products loaded:", data);
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <ProductsListItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
