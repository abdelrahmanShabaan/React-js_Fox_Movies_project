import React from 'react';
import './FavoriateCss.css';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveActionFunction } from '../Store/Actions/RemoveAction';

const FavoriatePage = () => {


  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const API_IMG = "https://image.tmdb.org/t/p/w500"

      //--------handle delete movie------------//
      const dispatch = useDispatch();
        
      const handleRemove = (event, movieId) => {
        event.preventDefault(); // Prevents the default behavior of the button click
        dispatch(RemoveActionFunction(movieId));
      };

  return (
    <div className='container'> 
            <h1 className="text-center text-dark texto"> Your Favoriate Movies</h1>

      {favorites.map((movie) => (
    <div key={movie.id}>
        <div className="card" style={{ display: "flex", flexWrap: "wrap" }}>
        <img className='card-img' src={movie.poster_path ? API_IMG + movie.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <div className="card-body">
        <button className='btn btn-danger' style={{width : '100%' }} onClick={(event) => handleRemove(event, movie.id)}>Remove</button>
        </div>
        </div>
    </div>

    
      ))}
</div>

  )
}

export default FavoriatePage;
