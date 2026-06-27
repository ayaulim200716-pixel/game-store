import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css";

export default function CartMenu({ items, onClick }) {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.title}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пустая"}
      </div>

      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого :</span>
            <span>{calcTotalPrice(items)} тг </span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
}
