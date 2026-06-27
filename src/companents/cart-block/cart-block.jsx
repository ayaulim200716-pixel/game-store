import "./cart-block.css";
import CartMenu from "../cart-menu/cart-menu";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils";
import { useState } from "react";
import ItemsInCart from "../items-in-cart/items-in-cart";

export default function CartBlock() {
  const [isCartMenuVisible, setisCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setisCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 && (
        <span className="cart-block__total-price">{totalPrice} тг</span>
      )}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
}
