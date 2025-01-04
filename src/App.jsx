import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetailPage from "./pages/ArticleDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:title" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
