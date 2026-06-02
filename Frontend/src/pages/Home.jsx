import React from 'react'
import MovieCard from "../components/MovieCard.jsx"
import { useState } from 'react';
const Home = () => {
  const [searchQuery , setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "John Wick", releaseDate: "1993" },
    { id: 2, title: "Insidious", releaseDate: "2002" },
    { id: 3, title: "War", releaseDate: "2004" }
  ];

  const handleSearch = (e) =>{
    e.preventDefault();
    alert(searchQuery);

  }
  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input type='text' placeholder='Search for movies' className='search-input' value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
        <button type='submit' className='search-button' >Search</button>
      </form>
      <div className="movie-grid">
        {movies.map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default Home