import React, { useState } from "react";
// import './App.css';
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Flix from "./pages/Finder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsFlix from "./pages/MovieDetails";


const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home setSearchResults={setSearchResults} />} />
          <Route path="/movie" exact element={<Flix searchResults={searchResults} setSearchResults={setSearchResults} />} />
          
          <Route path="/movie/:imdbID" exact element = {<DetailsFlix movies={searchResults} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
