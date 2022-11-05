import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageScroll from './pages/ImageScroll';
import WorkPage from './pages/WorkPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/image-scroll" element={<ImageScroll />}></Route>
          <Route path="/work-page" element={<WorkPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
