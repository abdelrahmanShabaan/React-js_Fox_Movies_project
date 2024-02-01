import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Components/Navbar';
import MovieList from './Pages/MovieList';
import MovieDetails from './Pages/MovieDetails';
import FavoriatePage from './Pages/FavoriatePage';
import NotFound from './Pages/NotFound';

function App() {


  return (

    <BrowserRouter>
    <Navbar /> 
    <Switch>
    <Route exact path={"/"} component={MovieList} />
    <Route exact path={"/moviedata/:id"} component={MovieDetails} />
    <Route exact path={"/favoriate"} component={FavoriatePage} />
    <Route exact path={"/home"} component={MovieList} />
    <Route exact path={"*"} component={NotFound}/>

    </Switch>    
    </BrowserRouter>

      
    
  );
}

export default App;
