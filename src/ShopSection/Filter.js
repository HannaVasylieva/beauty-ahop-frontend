import "./ShopSection.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory } from "../redux/productsSlice";

export const Filter = ({ category }) => {
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const dispatch = useDispatch();
  const isActive = selectedCategory === category;

  return (
    <button
      onClick={() => dispatch(filterCategory(category))}
      className={`shop__nav-item ${isActive ? "shop__nav-item--active" : ""}`}
    >
      {category}
    </button>
  );
};
