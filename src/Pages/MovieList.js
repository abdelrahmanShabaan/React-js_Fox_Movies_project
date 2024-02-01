import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";
import './MovieList.css';
import React from 'react';



function MovieList(){


        // Save dataname
        const [movies, setMovies] = useState([])


        //get data with axios
        useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eadbf752e3a5b90a3cf4a4afc0cb7e46`)
                .then((res)=> {setMovies(res.data.results)})
                .catch((err) => console.log(err));
            },[])

            
                
        //---------------------------------- search api -----------------------------------------//  
        const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=eadbf752e3a5b90a3cf4a4afc0cb7e46&query="

        //new state input change of search 
        const [term , setTerm] = useState('')


         //handle submit button
         const handleSearch = (e) => {
          e.preventDefault()
          fetch(API_SEARCH + term)
          .then(res => res.json()) 
          .then(data => setMovies(data.results))
        }

  

    //return 
    return(
        <>
        
            <div className="container">  
                <div className='search_box'>
                    <form class="form-control" onSubmit={handleSearch}>
                    <input class="form-control input_style" onChange={(e) => setTerm(e.target.value) } type="search" placeholder="Search for Movies" aria-label="Search"/>
                    </form>
                </div>
                    <div className='movies'>
                    {movies.map((movie) =>
                        <MovieCard {...movie}/>
                        )}
                    </div>

            </div>

        </>
    )


}


export default MovieList;