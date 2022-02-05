import Home from './Pages/Home';
import Search from './Pages/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";
import Nav from './Components/Nav';
import Details from './Pages/Details';

function App() {
  const [movie, setMovie] = useState();

  function searchMovie(value){
    setMovie(value);
  }

  return (
    <Router >
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home  searchMovie={searchMovie}/>} />
          <Route path="/search" element={<Search movie={movie} />} />
          <Route path="/search/:imdbID" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
