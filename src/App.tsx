import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import ScoreboardPage from "./pages/ScoreboardPage";
import BannerPage from "./pages/BannerPage/BannerPage";
import ChannelPage from "./pages/ChannelPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RoomPage />} />
        <Route path='/scoreboard' element={<ScoreboardPage />} />
        <Route path='/banner' element={<BannerPage />} />
        <Route path='/channel' element={<ChannelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
