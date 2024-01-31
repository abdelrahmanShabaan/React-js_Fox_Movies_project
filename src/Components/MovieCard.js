import React from 'react'
import './MovieCard.css';

function MovieCard(props) {

     const API_IMG = "https://image.tmdb.org/t/p/w500"

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
                <h2 className='title_overview'>Overview</h2>
                <h3 className='overview_info'>{props.overview}</h3>
            </div>
    </div>
    </>

    )
}


export default MovieCard;