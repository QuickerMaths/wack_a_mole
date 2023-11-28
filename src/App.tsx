import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import GameOver from "./pages/GameOver/GameOver";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="wacking-time" element={<Game />} />
          <Route path="game-over" element={<GameOver />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
