import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import ProductsDetailItem from "../../components/ProductsDetailItem";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.productDetail(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  if (product === null) return null;

  return (
    <div>
      <ProductsDetailItem product={product} />
    </div>
  );
}

export default ProductDetailPage;
