import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import SuperHeroesPage from "./components/SuperHeroesPage";
import RQSuperHeroesPage from "./components/RQSuperHeroesPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/super-heroes" element={<SuperHeroesPage />} />
      <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
