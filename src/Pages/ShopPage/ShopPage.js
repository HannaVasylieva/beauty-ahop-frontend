import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProductList } from "../../ProductList/ProductList";
import "./ShopPage.scss";
import { resetCategory } from "../../redux/productsSlice";

export const ShopPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(resetCategory());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location, dispatch]);

  return (
    <section>
      <h2>Welcome to the shop</h2>
      <ProductList isLimited={false} />
    </section>
  );
};
