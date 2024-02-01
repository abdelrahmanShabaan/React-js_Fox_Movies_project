
import './CartForOne.css';
import React from 'react';

function CartForOneData(props){


    //try to handle image
    const API_IMG = "https://image.tmdb.org/t/p/w500"


    
    return(


        <>
       <div class="cards container">
       <img src={props.poster_path ? API_IMG + props.poster_path : "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                   <div class="cards-body">
                   <h5 class="cards-title">{props.title}</h5>
                   <h5 class="cards-title">{props.vote_average}</h5>
                   <p class="cards-title">{props.overview}</p>
                   </div>
               </div>
       </>

       )
}

export default CartForOneData;