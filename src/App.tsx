import React from "react";
import { hot } from "react-hot-loader";
import { HomePage } from "./pages/HomePage/HomePage";

import "./App.css";

export const App: React.FC = hot(module)(() => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
});

export default hot(module)(App);
