import { Link, useLocation } from "react-router-dom";
import "./ShopSection.scss";
import { Filter } from "./Filter";
import { ProductList } from "../ProductList/ProductList";
import { filterCategory, resetCategory } from "../redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export const ShopSection = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  useEffect(() => {
    if (location.pathname === "/shopPage") {
      dispatch(resetCategory());
    } else if (selectedCategory === "ALL") {
      dispatch(filterCategory("FACE"));
    }
  }, [location, dispatch, selectedCategory]);

  return (
    <section className="shop" id="shop">
      <h2 className="shop__header">Shop</h2>

      <div className="shop__nav">
        {["FACE", "BODY", "HAIR", "CANDLES"].map((category) => (
          <Filter key={category} category={category} />
        ))}
      </div>

      <ProductList isLimited={true} />

      <Link
        onClick={() => {
          dispatch(resetCategory());
        }}
        to="/shopPage"
        className="shop__button"
      >
        All products
      </Link>
    </section>
  );
};
