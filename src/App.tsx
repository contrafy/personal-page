// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/landing";
import Projects from "./pages/projects";
import About from "./pages/about";
import Shop from "./pages/shop";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Landing />} />
    </Routes>
  );
}