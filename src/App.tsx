import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClassicPage from './pages/ClassicPage';
import HotspotsPage from './pages/HotspotsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
      <Routes>
        <Route path="/classic" Component={ClassicPage} />
      </Routes>
      <Routes>
        <Route path="/hotspots" Component={HotspotsPage} />
      </Routes>
    </Router>
  );
}

export default App;