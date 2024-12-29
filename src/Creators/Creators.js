import { HashLink } from "react-router-hash-link";
import "./Creators.scss";

export const Creators = () => {
  return (
    <section className="creators" id="creators">
      <div className="creators__left">
        <h2 className="creators__heading">About the creators</h2>

        <p className="creators__text">
          At Evergreen Essence, our passion for eco-friendly beauty goes hand in
          hand with our dedication to nature and wildlife preservation. Each of
          our products is thoughtfully crafted by a team of creators who share a
          deep connection with the earth. Inspired by the purity of natural
          ingredients and the harmony of ecosystems, they pour their love for
          the environment into every step of the process. Our creators are not
          just artisans; they are advocates for animal protection and
          sustainability. By choosing Evergreen Essence, you’re supporting a
          community that prioritizes cruelty-free practices, eco-conscious
          packaging, and a commitment to a greener planet. Together, we
          celebrate beauty that is kind to you and gentle on the world we all
          share.
        </p>
        <HashLink smooth="true" to="#contact"className="creators__btn">
          To contact us
        </HashLink>
      </div>

      <div className="creators__right">
        <img className="creators__img" src="girl.png" alt="girl" />
      </div>
    </section>
  );
};
