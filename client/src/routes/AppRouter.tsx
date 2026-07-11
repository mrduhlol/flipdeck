import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Lobby from "../pages/Lobby";
import Game from "../pages/Game";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/lobby/:roomCode" element={<Lobby />} />

        <Route path="/game/:roomCode" element={<Game />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;