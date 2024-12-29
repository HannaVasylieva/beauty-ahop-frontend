import "./ChangeQuantity.scss";

export const ChangeQuantity = ({ quantity, setQuantity }) => {
  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  }

  const removeQuantity = () => {
    if (quantity <= 1) return;

    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  }

  return (
    <div className="quantity">
      <button className="quantity__btn" onClick={addQuantity}>+</button>
      <span className="quantity__number">{quantity}</span>
      <button className="quantity__btn" onClick={removeQuantity}>-</button>
    </div>
  )
}