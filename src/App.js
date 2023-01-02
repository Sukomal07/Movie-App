import {useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

function App() {
  const API_URL = "https://api.themoviedb.org/3/tv/popular?api_key=a0f0685477abfc655b797d46d1d83301"
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=a0f0685477abfc655b797d46d1d83301&query="
  const [movies , setMovies] = useState([])
  const [term , setTerm] = useState('')
  useEffect(() =>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  },[])
  console.log(movies)
  const handleSearch = (e) =>{
    e.preventDefault()
    fetch(API_SEARCH + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }
  return (
    <div className="App">
      <div className='search_nav'>
        <div className='h1'>
          <h1> Popular Tv Shows </h1>
        </div>

        <div className=' searchBar'>
          <form onSubmit={handleSearch} className='form'>
            <input className='searchInput' onChange={(e) => setTerm(e.target.value)} placeholder="What are you looking for?"/>
            <button className="searchButton"> Search </button>
          </form>
        </div>
      </div>
      <div className='movies'>
        {movies.map((movie) => 
        <MovieCard{...movie}/>
      )}
      </div>
    </div>
  );
}

export default App;
