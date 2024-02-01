import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import CartForOneData from "../Components/CartForOneData";
import React from 'react';

function MovieDetails(){


            //SAVE THE USER ID From Use params
            const movieId = useParams();


              // Save dataname
        const [movies, setMovieSaver] = useState([])


        //get data with axios
        useEffect(() => {
            axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=eadbf752e3a5b90a3cf4a4afc0cb7e46`)
            .then((res)=> {setMovieSaver(res.data)})
            .catch((err) => console.log(err));
            },[])


    return(
        <>
                <div className="container">
                <h1 className="text-center text-dark">{movies.original_title} Movie Details</h1>
                
                    <CartForOneData image={movies.poster_path} title={movies.original_title}  view={ movies.vote_average} overview={movies.overview}/>
                </div>



        
        </>
    )
}

export default MovieDetails;