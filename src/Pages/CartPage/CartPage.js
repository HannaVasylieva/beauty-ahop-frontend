import { useDispatch, useSelector } from "react-redux";
import {
  getCartItems,
  getTotalPrice,
  removeItemFromCart,
} from "../../redux/cartSlice";
import "./CartPage.scss";

export const CartPage = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p className="cart__text">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart__list">
            {cartItems.map((cartItem) => (
              <li className="cart__item" key={cartItem.itemId}>
                <img className="cart__img" src={cartItem.image} alt="product" />
                <div className="cart__content">
                  <p className="cart__text">{cartItem.name}</p>
                  <p className="cart__text">Quantity: {cartItem.quantity}</p>
                  <p className="cart__price">
                    Price: ${cartItem.price * cartItem.quantity}
                  </p>
                </div>
                <button
                  onClick={() => {
                    dispatch(
                      removeItemFromCart({ cartItemId: cartItem.itemId })
                    );
                  }}
                  className="cart__delete"
                >
                  <img
                    src="trash.png"
                    alt="delete button"
                    className="cart__img-delete"
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="cart__total">Total to pay: ${totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};
