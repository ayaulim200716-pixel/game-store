import { configureStore } from "@reduxjs/toolkit";
import cartReduser from "./cart/reducer";
import gamesReduser from "./games/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReduser,
    game: gamesReduser,
  },
});
