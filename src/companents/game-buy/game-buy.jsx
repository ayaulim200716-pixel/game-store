import Button from "../button/button";
import "./game-buy.css";

export default function GameBuy({ game }) {
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} тг</span>
      <Button onClick={() => null} type="primary">
        В корзину
      </Button>
    </div>
  );
}
