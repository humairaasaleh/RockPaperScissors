import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavMenu from "./pages/NavMenu";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/game" element={<Game />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
