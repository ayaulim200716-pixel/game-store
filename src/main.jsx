import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./companents/redux";
import Header from "./companents/header/header";
import HomePage from "./pages/home-page/home-page";
import GamePage from "./pages/game-page/game-page";
import OrderPage from "./pages/order-page/order-page";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  </StrictMode>,
);
