import React, { useEffect, useState } from 'react'
import './MovieCard.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

function MovieCard(props) {

     const API_IMG = "https://image.tmdb.org/t/p/w500"



        //try to handle fetch id of movies

        // Save dataname
        const [movies, setMovies] = useState([])


        //get data with axios
        useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=eadbf752e3a5b90a3cf4a4afc0cb7e46`)
                 .then((res)=> {setMovies(res.data.results)})
                .catch((err) => console.log(err));
            },[])




    return(

     <>
    <div className="card">
            <div className='poster'>
                <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            </div>    
            <div className='info'>
              <p className='title'>{props.title}</p> 
                <p className='vote'>{props.vote_average}</p>
            </div>

            <div className='oveview'>
            <Link to={`/moviedata/${props.id}`}>  <button className='btn btn-priamry title_overview'>Overview</button> </Link>
             <h3 className='overview_info'>{props.overview}</h3>  
            </div>
    </div>
    </>

    )
}


export default MovieCard;