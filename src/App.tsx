import React from "react";
import { hot } from "react-hot-loader";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { InfoPage } from "./pages/InfoPage/InfoPage";
import { GamesPage } from "./pages/GamesPage/GamesPage";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage";
import { VideosPage } from "./pages/VideosPage/VideosPage";
import { PricesPage } from "./pages/PricesPage/PricesPage";
import { СontactsPage } from "./pages/СontactsPage/InfoPage";

import "./App.css";

//установить валидный hot (для обновления страницы в реальном времени)
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/photo" element={<GalleryPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/contacts" element={<СontactsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
