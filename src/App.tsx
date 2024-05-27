import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomPage from "./pages/RoomPage";
import ScoreboardPage from "./pages/ScoreboardPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RoomPage />} />
                <Route path="/scoreboard" element={<ScoreboardPage />} />
            </Routes>
        </Router>
    );
}

export default App;
