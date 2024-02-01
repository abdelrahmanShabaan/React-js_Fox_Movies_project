import React, { useEffect, useState } from 'react'
import './MovieCard.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { favoriateActionFunction } from '../Store/Actions/FavoriateAction';
import { FaHeart } from "react-icons/fa";

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

        
            //--------------------------- start handle favoriate icon -------------------------------//

            const favoriaters = useSelector((state) => state.favoriate.favoriate) 

            const dispatch = useDispatch()

            const addToFav = () =>{
                // //dispatch action with action name useDispatch
                const isAlreadyAdded = favoriaters.some((favorite) => favorite.id === props.id);

                //if condition if it's added 
                if (isAlreadyAdded) {
                    alert("This item is already in favorites!");
                } else {
                    // Dispatch action to add the item to favorites
                    dispatch(favoriateActionFunction(props))
                }
                
            }

            


    return(

     <>
    <div className="card">
            <div className='poster'>
                <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
            </div>    
            <div className='info'>
              <p className='title'>{props.title}</p> 
                <p className='vote'>Vote:{props.vote_average}</p>
            </div>

            <div className='oveview'>
            <Link to={`/moviedata/${props.id}`}>  <button className='btn btn-priamry title_overview'>Overview</button> </Link>
            <button className="btn btn-outline-danger favbut " onClick={() => addToFav()}>Add To : <FaHeart /></button>

            </div>
    </div>
    </>

    )
}


export default MovieCard;