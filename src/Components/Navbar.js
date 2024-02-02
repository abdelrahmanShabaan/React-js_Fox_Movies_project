import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoriateActionFunction } from "../Store/Actions/FavoriateAction";
import './NavbarStyle.css';
import { FaHeart, FaHeartbeat, FaRegHeart } from "react-icons/fa";
import axios from "axios";

function Navbar() {

    const favoritesCount = useSelector((state) => state.favoriate.favoriate.length);

    
   

    return (
        <> 
       <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" to="#" style={{ color: 'white' }}>Movies</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/home" style={{ color: 'white' }}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/favoriate" style={{ color: 'white' }}>Favoriate</Link>
                    </li>
                    <li className="fav" style={{ color: 'red' }}>  <FaRegHeart /> {favoritesCount}</li>
                    
               </ul>
               </div>
           </div>
         </nav>
           </>
       )
   }
   
   

export default Navbar;