import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClassicPage from './pages/ClassicPage';
import HotspotsPage from './pages/HotspotsPage';
import MoodboardPage from './pages/MoodboardPage';
import MainAndDetailPage from './pages/MainAndDetailPage';
import GalleryPage from './pages/GalleryPage';
import GenericPage from './pages/GenericPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/generic" Component={GenericPage} />
        <Route path="/classic" Component={ClassicPage} />
        <Route path="/hotspots" Component={HotspotsPage} />
        <Route path="/moodboard" Component={MoodboardPage} />
        <Route path="/main-and-detail" Component={MainAndDetailPage} />
        <Route path="/gallery" Component={GalleryPage} />
      </Routes>
    </Router>
  );
}

export default App;