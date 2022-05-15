import React from "react";
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/movie/:imdbID" element={MovieDetail} />
          <Route element={PageNotFound} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
