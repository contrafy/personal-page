import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/landing';
import Projects from './pages/projects';
import About from './pages/about';
import Shop from './pages/shop';

function App() {
  const location = useLocation();
  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          {/* catch-all for undefined routes */}
          <Route path="*" element={<Landing />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
