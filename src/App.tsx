import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import ScoreboardPage from "./pages/ScoreboardPage";
import BannerPage from "./pages/BannerPage/BannerPage";
import ChannelPage from "./pages/ChannelPage";
import AddFriendPage from "./pages/AddFriendPage";
import ButtonPage from "./pages/ButtonPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<RoomPage />} />
        <Route path='/scoreboard' element={<ScoreboardPage />} />
        <Route path='/banner' element={<BannerPage />} />
        <Route path='/channel' element={<ChannelPage />} />
        <Route path='/add' element={<AddFriendPage />} />
        <Route path='/button' element={<ButtonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
