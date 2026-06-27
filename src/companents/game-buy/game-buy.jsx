import Button from "../button/button";
import { deleteItemFromCart, setItemInCart } from "../redux/cart/reducer";
import "./game-buy.css";
import { useDispatch, useSelector } from "react-redux";

export default function GameBuy({ game }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    dispatch(setItemInCart(game));
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} тг</span>
      <Button
        onClick={handleClick}
        type={isItemInCart ? "secondary" : "primary"}
      >
        {isItemInCart ? "Убрать из корзины " : "В корзину"}
      </Button>
    </div>
  );
}
