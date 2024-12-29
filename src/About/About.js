import { HashLink } from "react-router-hash-link";
import "./About.scss";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__info">
        <h2 className="about__info-header">About our brand</h2>
        <p className="about__info-text">
          Our cosmetics are made from natural ingredients, and we're dedicated
          to promoting them widely. Our products, including shampoo,
          conditioner, and soap, are packaged in recycled paper. Creams, oils,
          and cleaning products come in glass containers with recycled paper
          labels. We use no synthetic materials or microplastics in our
          cosmetics. Plus, our packaging can be returned for recycling or
          reused. We all share one big home—our planet. It's our responsibility
          to protect it. Make a conscious choice!
        </p>

        <HashLink smooth="true" to="#creators" className="about__info-link">
          Learn more
        </HashLink>
      </div>

      <div className="about__pictures">
        <img src="./candle.png" alt="candle" className="about__pictures-left" />
        <img
          src="./candle.png"
          alt="candle"
          className="about__pictures-right"
        />
      </div>
    </section>
  );
};
