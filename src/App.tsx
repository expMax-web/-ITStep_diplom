import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { useTransition, animated, useSpringRef } from "react-spring";

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
import styles from "./styles.module.css";

//установить валидный hot (для обновления страницы в реальном времени)
export const App: React.FC = () => {
  const location = useLocation();
  console.log(location);

  const transRef = useSpringRef();

  const transitions = useTransition(location, {
    ref: transRef,
    keys: null,
    from: {
      opacity: 0,
      transform: `translate3d(100%, 0, 0)`,
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
    },
    leave: {
      opacity: 0,
      transform: `translate3d(-50%, 0, 0)`,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <div className={`flex fill`}>
        {transitions((props, item) => (
          <animated.main style={props} className={styles.container}>
            <Routes location={item}>
              <Route path="/" element={<HomePage />} />
              <Route path="/info" element={<InfoPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/photo" element={<GalleryPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/prices" element={<PricesPage />} />
              <Route path="/contacts" element={<СontactsPage />} />
            </Routes>
          </animated.main>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
