import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import ScoreboardPage from "./pages/ScoreboardPage";
import BannerPage from "./pages/BannerPage/BannerPage";
import ChannelPage from "./pages/ChannelPage";
import AddFriendPage from "./pages/AddFriendPage";
import ButtonPage from "./pages/ButtonPage";
import ReportPage from "./pages/ReportPage";
import ModePage from "./pages/ModePage";
import HistoryPage from "./pages/HistoryPage";
import CountPage from "./pages/CountPage";
import ServerPage from "./pages/ServerPage/ServerPage";
import EditPage from "./pages/EditPage";

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
        <Route path='/report' element={<ReportPage />} />
        <Route path='/mode' element={<ModePage />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/count' element={<CountPage />} />
        <Route path='/server' element={<ServerPage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
