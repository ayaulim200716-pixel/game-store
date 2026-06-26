import "./cart-block.css";
import { BiCartAlt } from "react-icons/bi";

export default function CartBlock() {
  return (
    <div className="cart-block">
      <BiCartAlt size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">2313 тг</span>
    </div>
  );
}
