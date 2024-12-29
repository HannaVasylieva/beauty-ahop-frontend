import { useDispatch } from "react-redux";
import { ChangeQuantity } from "../ChangeQuantity/ChangeQuantity";
import { addItemToCart } from "../redux/cartSlice";
import "./ProductCard.scss";
import "./Modal.scss";
import "./Notification.scss";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const { image, name, price, description } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    document.body.classList.add("no-scroll");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    document.body.classList.remove("no-scroll");
    setIsModalOpen(false);
  };
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItemToCart({ product, quantity }));
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <>
      <li className="product-card">
        <img
          onClick={openModal}
          className="product-card__img"
          src={`${image}?w=300`}
          alt={name}
          loading="lazy"
        />
        <h3 onClick={openModal} className="product-card__name">
          {name}
        </h3>
        <div className="product-card__buy">
          <span className="product-card__price">${price}</span>
          <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
          <button className="product-card__button" onClick={handleAddToCart}>
            <img
              className="product-card__btn-img"
              src="add-to-basket.png"
              alt="add to basket button"
            />
          </button>
        </div>
      </li>

      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            <img className="modal__img" src={image} alt={name} />
            <h3 className="modal__name">{name}</h3>
            <p className="modal__description">{description}</p>
            <div className="modal__buy">
              <span className="modal__price">${price}</span>
              <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
              <button className="modal__button" onClick={handleAddToCart}>
                <img
                  className="product-card__btn-img"
                  src="add-to-basket.png"
                  alt="add to basket button"
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="notification">Item was added to the cart</div>
      )}
    </>
  );
};
