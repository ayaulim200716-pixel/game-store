import { useSelector } from "react-redux";
import "./game-page.css";

export default function GamePage() {
  const game = useSelector((state) => state.games.currentGame);
  if (game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
    </div>
  );
}
