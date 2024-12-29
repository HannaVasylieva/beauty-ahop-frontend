import { Link } from "react-router-dom";
import "./MainInfo.scss";

export const MainInfo = () => {
  return (
    <section className="main">
      <h1 className="main__text">
        Brand of eco-cosmetics and aromatic candles
      </h1>

      <Link to="/shopPage" className="main__link">
        Shop
      </Link>
    </section>
  );
};
