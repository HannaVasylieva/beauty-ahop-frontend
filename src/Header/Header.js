import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../redux/cartSlice";

export const Header = () => {
  const location = useLocation(); // Получаем текущий путь страницы

  // Проверяем, находимся ли мы на странице корзины
  const isCartPage = location.pathname === "/cart";
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/" className="header__logo">
          <img className="header__logo-img" src="logo.png" alt="logo" />
          <span className="header__logo-span">Evergreen Essence</span>
        </Link>

        {/* Если мы не на странице корзины, отображаем ссылки навигации */}
        {!isCartPage && (
          <nav className="header__nav-links">
            <HashLink smooth to="#shop" className="header__nav-link">
              Shop
            </HashLink>
            <HashLink smooth to="#about" className="header__nav-link">
              About
            </HashLink>
            <HashLink smooth to="#contact" className="header__nav-link">
              Contact
            </HashLink>
          </nav>
        )}

        <Link to="/cart" className="header__shopping-cart">
          <img
            src="shopping-bag.png"
            alt="shopping-cart"
            className="header__cart-img"
          />
          {totalQuantity > 0 && (
            <span className="header__cart-quantity">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
