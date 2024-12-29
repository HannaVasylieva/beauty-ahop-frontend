import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">Copyright&copy; 2024 Evergreen Essence</p>
      </div>
      <div className="footer__right">
        <a className="footer__link" href="mailto:evergreen@gmail.com">
          evergreen@gmail.com
        </a>
        <a className="footer__link" href="tel:+1234567890">
          +1 (234) 567-890
        </a>

        <h3 className="footer__heading">Working Hours:</h3>
        <p className="footer__text">Mon-Fri: 9am - 6pm</p>
      </div>
    </footer>
  );
};
