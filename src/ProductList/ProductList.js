import React, { useEffect } from "react";
import { ProductCard } from "../Product card/ProductCard";
import "./ProductList.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, selectFilteredProducts, selectLimitedProducts } from "../redux/productsSlice";
import Loader from "../Loader/Loader";

const ProductListComponent = ({ isLimited }) => {
  const dispatch = useDispatch();
  const products = useSelector(isLimited ? selectLimitedProducts : selectFilteredProducts);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
};

// Оборачиваем компонент в React.memo для мемоизации
export const ProductList = React.memo(ProductListComponent);
